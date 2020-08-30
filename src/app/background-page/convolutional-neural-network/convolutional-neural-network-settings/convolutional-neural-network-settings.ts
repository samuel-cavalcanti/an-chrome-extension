import * as tf from "@tensorflow/tfjs"
import Module from "../../../../utils/module"
import {
    ClassNameUrlsNotification,
    CnnModelSettingNotification,
    InputShapeNotification,
    LocalModelInputNotification,
    Notification,
    NotificationTypes,
    TensorFlowHubModelNotification
} from "../../../interfaces/notifications"
import {ClassNames} from "../../../interfaces/class-names"
import * as JSZIP from "jszip"
import {USER_INTERFACE_COMMUNICATION_ID} from "../../../../utils/user-interface-communication"


export class ConvolutionalNeuralNetworkSettings extends Module<Notification, Notification> {

    constructor() {
        super()
    }

    private callbacks = {
        [NotificationTypes.TensorFlowHubModelNotification]: this.hubModelNotification.bind(this),
        [NotificationTypes.ClassNameUrlsNotification]: this.classNameUrlsNotification.bind(this),
        [NotificationTypes.LocalModelInputNotification]: this.loadLocalCnn.bind(this)
    }

    private currentSettings: TensorFlowHubModelNotification

    private localClassesNames: { [key: string]: string }

    private static async xmlRequest(path: string, type?: XMLHttpRequestResponseType): Promise<any> {

        return new Promise<any>((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.addEventListener("load", () => {

                resolve(xhr.response)
            })

            xhr.addEventListener("error", () => {
                reject(`Error not solver request`)
            })
            xhr.open("GET", path, true)
            if (type) {
                xhr.responseType = type
            }
            xhr.send()
        })

    }

    private async loadCnnModel(tensorHubUrl: string): Promise<tf.GraphModel | undefined> {

        if (!this.needToLoadModel(tensorHubUrl)) {
            return undefined
        }


        console.log("Loading model...")

        const startTime = performance.now()

        const cnnModel = await tf.loadGraphModel(tensorHubUrl, {fromTFHub: true})

        console.log(`Model loaded  in ${Math.floor(performance.now() - startTime)} ms...`)

        return cnnModel
    }


    next(message: Notification) {


        if (this.callbacks[message.type]) {
            this.callbacks[message.type](message)
        }


    }


    complete(): void {
    }

    error(e): void {
    }

    private async hubModelNotification(message: TensorFlowHubModelNotification) {

        if (this.localClassesNames[message.cnnModelHub.dataset]) {
            try {
                const model = await this.loadCnnModel(message.cnnModelHub.url)
                const classNames = await this.loadClassNames(message.cnnModelHub.dataset)
                const settings: TensorFlowHubModelNotification = {...message, classNames}
                this.updateSetting(settings)
                this.notify(model)
            } catch (e) {
                console.warn("Unable update cnn settings: ", e)
            }

        }

    }

    private classNameUrlsNotification(notification: ClassNameUrlsNotification) {

        this.localClassesNames = notification.urls

        console.log("local Classes Names", this.localClassesNames)

    }

    private async loadLocalCnn(notification: LocalModelInputNotification) {
        console.log("notification", notification)


        const data = await ConvolutionalNeuralNetworkSettings.xmlRequest(notification.url, "arraybuffer")


        const zipDir = await JSZIP.loadAsync(data)

        await this.loadLocalSettings(zipDir)

        const model = await this.loadLocalModel(zipDir)


        this.notify(model)


    }

    private RecoverySettingsPath(zipDir: JSZIP): string {
        const zipFiles = Object.values(zipDir.files)

        for (const file of zipFiles) {
            if (file.dir) {
                return file.name + "settings.json"
            }
        }
        throw Error("Zip need to have root dir ")
    }

    private async loadLocalSettings(zipDir: JSZIP) {
        const settingsPath = this.RecoverySettingsPath(zipDir)
        console.log(settingsPath, zipDir)
        const json = await zipDir.files[settingsPath].async("text")

        const settings: TensorFlowHubModelNotification = {
            ...JSON.parse(json),
            type: NotificationTypes.TensorFlowHubModelNotification,
            id: USER_INTERFACE_COMMUNICATION_ID
        }

        this.updateSetting(settings)
        zipDir.remove(settingsPath)

        console.log("Zip files", zipDir.files)
    }

    private async loadLocalModel(zipDir: JSZIP) {

        const files = await this.zipFilesToFiles(zipDir.files)

        console.log(zipDir, files)

        return await tf.loadGraphModel(tf.io.browserFiles(files))
    }

    private async zipFilesToFiles(zipFiles: { [key: string]: JSZIP.JSZipObject }): Promise<Array<File>> {

        const files = new Array<File>()

        let jsonFile = null
        for (const zipFile of Object.values(zipFiles)) {
            if (zipFile.dir) {
                continue
            }
            const blob = await zipFile.async("blob")
            const file = new File([blob], zipFile.name)
            if (zipFile.name.indexOf("model.json") !== -1) {
                jsonFile = file
            } else {
                files.push(file)
            }

        }

        return [jsonFile, ...files]
    }


    private notify(cnnModel: tf.GraphModel) {

        console.log("notificando  observers", this.currentSettings, "CNN Model", cnnModel)

        this.notifyCnn(cnnModel)

        // this.notifyLoadImage(cnnModel)

        this.notifyUserInterface()

    }

    private async loadClassNames(dataset: string): Promise<ClassNames> {


        if (this.needToLoadClassNames(dataset)) {
            const json = await ConvolutionalNeuralNetworkSettings.xmlRequest(this.localClassesNames[dataset])
            return JSON.parse(json)
        } else {
            return this.currentSettings.classNames
        }

    }


    private needToLoadModel(url: string): boolean {
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

    private needToLoadClassNames(dataset: string) {
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

        console.log("updateSetting", settings, oldSettings)
        this.currentSettings = {...oldSettings, ...settings, enables}
    }

    private notifyLoadImage(cnnModel: tf.GraphModel) {
        if (!cnnModel) {
            return
        }

        const shape = [...cnnModel.inputs[0].shape]

        if (!shape) {
            throw Error(`Shape is undefined ${shape}`)
        }

        console.log("Shape of Model : ", shape)

        const notification: InputShapeNotification = {
            type: NotificationTypes.InputShapeNotification,
            shape: shape.splice(1, shape.length)
        }

        this.subject.next(notification)

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
