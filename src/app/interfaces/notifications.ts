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
  predict: string,
  imgSrc: string,
  message?: string,
}

interface ContentNotification {
  urlImages?: Array<string>,
  urlVideos?: Array<string>,
  message?: string,
}

export {Notification, ImageNotification, FilterNotification, ContentNotification}
