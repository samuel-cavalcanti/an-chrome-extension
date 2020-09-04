import CnnModelLoader from "../../../../../utils/cnn-model-loader"
import {ClassNames} from "../../../../interfaces/class-names"
import * as tf from "@tensorflow/tfjs"
import {NotificationTypes, TensorFlowHubModelNotification} from "../../../../interfaces/notifications"
import {IMAGE_NET_CLASSES} from "./image-net-class-names"

export class TensorHubModelLoader extends CnnModelLoader {

    private cnnModelUrl: string
    private dataset: string
    private datasets = {
        ["imagenet-ilsvrc-2012-cls"]: JSON.parse(IMAGE_NET_CLASSES)
    }

    constructor(notificaton: TensorFlowHubModelNotification) {
        super(notificaton)
        this.cnnModelUrl = notificaton.cnnModelHub.url
        this.dataset = notificaton.cnnModelHub.dataset

    }

    async getSettings(): Promise<TensorFlowHubModelNotification> {
        const classNames: ClassNames = this.datasets[this.dataset]
        if (!classNames) {
            return Promise.reject(`not support current dataset ${this.dataset}`)
        }

        const settings: TensorFlowHubModelNotification = {
            ...this.notification,
            classNames,
            cnnModelHub: (this.notification as TensorFlowHubModelNotification).cnnModelHub,
            type: NotificationTypes.TensorFlowHubModelNotification
        }

        return Promise.resolve(settings)


    }

    async getCnnModel(): Promise<tf.GraphModel> {
        console.log("Loading model...")

        const startTime = performance.now()

        const cnnModel = await tf.loadGraphModel(this.cnnModelUrl, {fromTFHub: true})

        console.log(`Model loaded  in ${Math.floor(performance.now() - startTime)} ms...`)

        return cnnModel

    }
}
