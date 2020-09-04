import * as tf from "@tensorflow/tfjs"

import {Notification, TensorFlowHubModelNotification} from "../app/interfaces/notifications"

export default abstract class CnnModelLoader {

    protected notification: Notification

    protected constructor(notification: Notification) {
        this.notification = notification

    }


    abstract async getCnnModel(): Promise<tf.GraphModel>

    abstract async getSettings(): Promise<TensorFlowHubModelNotification>


}
