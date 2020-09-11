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
    LocalModelInputNotification,
    ImageDataNotification,
    ImageUrlsNotification,
    ImageByURINotification
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
    images?: Array<HTMLImageElement>
    videos?: Array<HTMLVideoElement>
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


export interface ClassNameUrlsNotification extends Notification {
    type: NotificationTypes.ClassNameUrlsNotification
    urls: { [key: string]: string }
}

export interface ImageUrlsNotification extends Notification {
    type: NotificationTypes.ImageUrlsNotification
    imageUrls: Array<string>
}

export interface ImageDataNotification extends Notification {
    type: NotificationTypes.ImageDataNotification
    inputs: Array<{ src: string, data: ImageData }>
}


