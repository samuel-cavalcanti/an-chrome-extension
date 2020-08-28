import {
  ImageNotification,
  InputShapeNotification,
  Notification,
  NotificationTypes
} from "../../interfaces/notifications"
import Module from "../../../utils/module"


export class LoadImage extends Module<Notification, Notification> {

  constructor() {
    super()
  }

  private static noTabError = new Error("Tab Not found")
  private shape = {width: 224, height: 224, min: 40}


  private tabs: { [key: string]: string } = {}

  private callbacks = {
    [NotificationTypes.ImageSourceNotification]: this.imageSourceNotification.bind(this),
    // [NotificationTypes.InputShapeNotification]: this.inputShapeNotification.bind(this)
  }

  error(e): void {

  }

  complete(): void {

  }

  next(notification: Notification) {

    if (this.callbacks[notification.type]) {
      this.callbacks[notification.type](notification)
    }

  }

  private imageSourceNotification(notification: Notification) {
    if (notification.id === undefined) {
      throw LoadImage.noTabError
    }

    const img = this.createDomElement(notification.message)
    this.linkSourceToTab(img.src, notification.id)
  }

  private inputShapeNotification(notification: InputShapeNotification) {
    this.shape.width = notification.shape[0]
    this.shape.height = notification.shape[1]

  }


  private createDomElement(src: string): HTMLImageElement {
    if (!src) {
      return undefined
    }

    const img = document.createElement("img")
    img.addEventListener("error", this.onError.bind(this))
    img.addEventListener("load", this.onLoad.bind(this))
    img.src = src
    return img
  }

  private linkSourceToTab(src: string, tabUUID: string) {
    this.tabs[src] = tabUUID
  }

  private onError(event) {
    delete this.tabs[event.target.src]

  }

  private onLoad(event) {
    const imgTarget = (event.target as HTMLImageElement)
    if ((imgTarget.height && imgTarget.height >= this.shape.min) || (imgTarget.width && imgTarget.width >= this.shape.min)) {
      imgTarget.width = this.shape.width
      imgTarget.height = this.shape.height
      this.notify(imgTarget)
      return
    }

  }

  private getTabFromSource(src: string): string {
    const tab = this.tabs[src]
    if (!tab) {
      throw Error("Tab Not found")
    }

    return this.tabs[src]
  }

  notify(img: HTMLImageElement) {
    const id = this.getTabFromSource(img.src)

    this.subject.next({type: NotificationTypes.ImageNotification, id, img} as ImageNotification)
    delete this.tabs[img.src]
  }

}
