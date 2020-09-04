import * as tf from "@tensorflow/tfjs"
import Module from "../../../utils/module"
import {CnnModelSettingNotification, Notification, NotificationTypes, TensorFlowHubModelNotification} from "../../interfaces/notifications"
import CnnModelLoader from "../../../utils/cnn-model-loader"
import {TensorHubModelLoader} from "./cnn-loaders/tensorhub-loader/tensor-hub-model-loader"
import {InputButtonLoader} from "./cnn-loaders/input-button-loader/input-button-loader"


export class ClassifierManager extends Module<Notification, Notification> {

    constructor() {
        super()
    }

    private callbacks = {
        [NotificationTypes.TensorFlowHubModelNotification]: this.tensorHubNotification.bind(this),
        [NotificationTypes.LocalModelInputNotification]: this.tryToUpdateCnnModel.bind(this)
    }

    private waysToLoadModel = {
        [NotificationTypes.TensorFlowHubModelNotification]: TensorHubModelLoader,
        [NotificationTypes.LocalModelInputNotification]: InputButtonLoader
    }

    private currentSettings: TensorFlowHubModelNotification

    next(message: Notification) {


        if (this.callbacks[message.type]) {
            this.callbacks[message.type](message)
        }

    }


    complete(): void {
    }

    error(e): void {
    }

    private async tryToUpdateCnnModel(notification: Notification) {

        try {
            await this.updateCnnModel(notification)
        } catch (e) {
            console.warn("Unable update cnn : ", e)
        }


    }

    private async tensorHubNotification(notification: TensorFlowHubModelNotification) {

        if (this.needToUpdateCnnModel(notification)) {
            await this.updateCnnModel(notification)
        } else {
            this.updateSetting(notification)
            this.notify()
        }


    }

    private async updateCnnModel(notification: Notification) {

        const modelLoader: CnnModelLoader = new this.waysToLoadModel[notification.type](notification)
        const settings = await modelLoader.getSettings()
        const model = await modelLoader.getCnnModel()


        this.updateSetting(settings)
        this.notify(model)


    }


    private needToUpdateCnnModel(settings: TensorFlowHubModelNotification) {
        return this.needToUpdateModel(settings.cnnModelHub.url) || this.needToUpdateClassNames(settings.cnnModelHub.dataset)
    }


    private notify(cnnModel?: tf.GraphModel) {

        console.log("notificando  observers", this.currentSettings, "CNN Model", cnnModel)

        this.notifyCnn(cnnModel)


        this.notifyUserInterface()

    }


    private needToUpdateModel(url: string): boolean {
        if (!url) {
            return false
        }

        if (!this.currentSettings) {
            return true
        }

        if (!this.currentSettings.cnnModelHub) {
            return true
        }

        return this.currentSettings.cnnModelHub.url !== url

    }

    private needToUpdateClassNames(dataset: string) {
        if (!dataset) {
            return false
        }

        if (!this.currentSettings) {
            return true
        }

        if (!this.currentSettings.cnnModelHub.dataset) {
            return true
        }

        return this.currentSettings.cnnModelHub.dataset !== dataset
    }

    private updateSetting(settings: TensorFlowHubModelNotification) {

        const enables = settings.enables ? settings.enables : Object.values(settings.classNames).map(() => true)
        const oldSettings = this.currentSettings ? this.currentSettings : {}


        this.currentSettings = {...oldSettings, ...settings, enables}

    }


    private notifyCnn(cnnModel: tf.GraphModel) {
        const cnnMessage: CnnModelSettingNotification = {
            id: "ConvolutionalNeuralNetworkSettings",
            type: NotificationTypes.CnnModelSettingNotification,
            cnnModel,
            classNames: this.currentSettings.classNames,
            enables: this.currentSettings.enables
        }
        this.subject.next(cnnMessage)

    }

    private notifyUserInterface() {
        this.subject.next(this.currentSettings)
    }
}
