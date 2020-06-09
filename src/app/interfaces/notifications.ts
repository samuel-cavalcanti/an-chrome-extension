interface ImageNotification {
  id: number,
  img: HTMLImageElement,
}

interface Notification {
  id: number,
  message: string
}

interface FilterNotification {
  id: number,
  predict: string,
  imgSrc: string
}


export {Notification, ImageNotification, FilterNotification}
