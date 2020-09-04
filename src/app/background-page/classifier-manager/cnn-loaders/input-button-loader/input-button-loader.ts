import CnnModelLoader from "../../../../../utils/cnn-model-loader"
import {Notification, NotificationTypes, TensorFlowHubModelNotification} from "../../../../interfaces/notifications"
import * as tf from "@tensorflow/tfjs"
import * as JSZIP from "jszip"
import {USER_INTERFACE_COMMUNICATION_ID} from "../../../../../utils/user-interface-communication"

export class InputButtonLoader extends CnnModelLoader {

    constructor(notification: Notification) {
        super(notification)

    }

    private zipDir: JSZIP
    private readonly settingsFileName = "settings.json"

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


    async getSettings(): Promise<TensorFlowHubModelNotification> {
        await this.downloadZipFile()

        const settingsPath = this.recoverySettingsPath()
        console.log(settingsPath, this.zipDir)
        const json = await this.zipDir.files[settingsPath].async("text")

        const settings: TensorFlowHubModelNotification = {
            ...JSON.parse(json),
            type: NotificationTypes.TensorFlowHubModelNotification,
            id: USER_INTERFACE_COMMUNICATION_ID
        }

        this.zipDir.remove(settingsPath)


        console.log("Zip files", this.zipDir.files)

        return settings
    }

    async getCnnModel(): Promise<tf.GraphModel> {
        await this.downloadZipFile()

        const files = await this.zipFilesToFiles()

        console.log(this.zipDir, files)

        return await tf.loadGraphModel(tf.io.browserFiles(files))

    }

    private async requestZipFile() {
        console.log("loadZipDir notification", this.notification.message)


        const data = await InputButtonLoader.xmlRequest(this.notification.message, "arraybuffer")


        this.zipDir = await JSZIP.loadAsync(data)


    }

    private async downloadZipFile() {
        if (!this.zipDir) {
            await this.requestZipFile()
        }
    }


    private recoverySettingsPath(): string {
        const zipFiles = Object.values(this.zipDir.files)

        for (const file of zipFiles) {
            if (file.dir) {
                return file.name + this.settingsFileName
            }
        }
        throw Error("Zip need to have root dir ")
    }


    private async zipFilesToFiles(): Promise<Array<File>> {
        const zipFiles = this.zipDir.files

        const files = new Array<File>()

        let jsonFile = null
        for (const zipFile of Object.values(zipFiles)) {
            if (zipFile.dir || zipFile.name.indexOf(this.settingsFileName) !== -1) {
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


}
