import * as tf from "@tensorflow/tfjs"
import Module from "../../../utils/module"
import {CnnModelSettingNotification, Notification, NotificationTypes, TensorFlowHubModelNotification} from "../../interfaces/notifications"
import CnnModelLoader from "../../../utils/cnn-model-loader"
import {TensorHubModelLoader} from "./cnn-loaders/tensorhub-loader/tensor-hub-model-loader"
import {InputButtonLoader} from "./cnn-loaders/input-button-loader/input-button-loader"
import {TensorflowHubModel} from "../../interfaces/tensorflow-hub-model"


export class ClassifierManager extends Module<Notification, Notification> {
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


    private async tensorHubNotification(notification: TensorFlowHubModelNotification) {

        if (this.needToUpdateCnnModel(notification)) {
            await this.tryToUpdateCnnModel(notification)
        } else {
            this.updateSetting(notification)
            this.notify()
        }


    }

    private async tryToUpdateCnnModel(notification: Notification) {

        try {
            const {settings, model} = await this.loadCnnModel(notification)
            this.updateSetting(settings)
            this.notify(model)
        } catch (e) {
            console.warn("Unable do update model", e)
            const settings: TensorFlowHubModelNotification = {
                type: NotificationTypes.TensorFlowHubModelNotification,
                classNames: {},
                cnnModelHub: {} as TensorflowHubModel
            }
            this.updateSetting(settings)
            this.notify()

        }

    }


    private async loadCnnModel(notification: Notification) {

        const modelLoader: CnnModelLoader = new this.waysToLoadModel[notification.type](notification)
        const settings = await modelLoader.getSettings()
        const model = await modelLoader.getCnnModel()

        return {settings, model}
    }


    private needToUpdateCnnModel(settings: TensorFlowHubModelNotification) {
        return this.needToUpdateModel(settings.cnnModelHub.url) || this.needToUpdateClassNames(settings.cnnModelHub.dataset)
    }


    private notify(cnnModel?: tf.GraphModel) {


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
