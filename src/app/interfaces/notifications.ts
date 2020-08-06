import {Predict} from "./class-name";

interface ImageNotification {
  id: string,
  img: HTMLImageElement,
}

interface Notification {
  id: string,
  message: string
}

interface FilterNotification {
  id: string,
  predict: Predict,
  imgSrc: string,
  message?: string,
}

interface ContentNotification {
  urlImages?: Array<string>,
  urlVideos?: Array<string>,
  message?: string,
}

export {Notification, ImageNotification, FilterNotification, ContentNotification}
