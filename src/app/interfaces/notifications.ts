import {ClassNames} from "./class-names"
import * as tf from "@tensorflow/tfjs"
import {TensorflowHubModel} from "./tensorflow-hub-model"

export enum NotificationTypes {
    Notification,
    ImageSourceNotification,
    ClassNameUrlsNotification,
    ImageNotification,
    FilterNotification,
    ContentNotification,
    CnnModelSettingNotification,
    TensorFlowHubModelNotification,
    InputShapeNotification,
    LocalModelInputNotification
}

export interface Notification {
    id?: string
    type: number
    message?: string
}

export interface ImageNotification extends Notification {
    type: NotificationTypes.ImageNotification
    img: HTMLImageElement,
}


export interface FilterNotification extends Notification {
    type: NotificationTypes.FilterNotification
    predict: string
    imgSrc: string
}

export interface ContentNotification extends Notification {
    type: NotificationTypes.ContentNotification
    urlImages?: Array<string>
    urlVideos?: Array<string>
}

export interface CnnModelSettingNotification extends Notification {
    type: NotificationTypes.CnnModelSettingNotification
    cnnModel?: tf.GraphModel
    classNames?: ClassNames
    enables?: Array<boolean>
}

export interface TensorFlowHubModelNotification extends Notification {
    type: NotificationTypes.TensorFlowHubModelNotification
    cnnModelHub: TensorflowHubModel
    classNames?: ClassNames
    enables?: Array<boolean>
}

export interface InputShapeNotification extends Notification {
    type: NotificationTypes.InputShapeNotification
    shape: Array<number>
}

export interface ClassNameUrlsNotification extends Notification {
    type: NotificationTypes.ClassNameUrlsNotification
    urls: { [key: string]: string }
}

export interface LocalModelInputNotification extends Notification {
    type: NotificationTypes.LocalModelInputNotification
    url: string
}

