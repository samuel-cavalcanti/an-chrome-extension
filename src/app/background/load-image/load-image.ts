import {ImageSize} from "../../interfaces/image-size";
import {ImageNotification, Notification, NotificationTypes} from "../../interfaces/notifications";
import Module from "../../../classes/module";


export class LoadImage extends Module<Notification, Notification> {
  imageSize: ImageSize = <ImageSize>{expected: 200, min: 40}


  private tabs: { [key: string]: string } = {}

  private static noTabError = new Error('Tab Not found')

  constructor() {
    super()
  }

  error(e): void {

  }

  complete(): void {

  }

  next(notification: Notification) {

    if (notification.type != NotificationTypes.ImageSourceNotification) {
      return
    }

    if (notification.id === undefined) {
      throw LoadImage.noTabError
    }


    const img = this.createDomElement(notification.message)
    this.linkSourceToTab(img.src, notification.id)
  }

  private createDomElement(src: string): HTMLImageElement {
    if (!src)
      return undefined

    const img = document.createElement('img');
    img.addEventListener('error', this.onError.bind(this))
    img.addEventListener('load', this.onLoad.bind(this))
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
    const imgTarget = (<HTMLImageElement>event.target)
    if ((imgTarget.height && imgTarget.height >= this.imageSize.min) || (imgTarget.width && imgTarget.width >= this.imageSize.min)) {
      imgTarget.width = this.imageSize.expected;
      imgTarget.height = this.imageSize.expected;
      this.notify(imgTarget)
      return
    }

  }

  private getTabFromSource(src: string): string {
    const tab = this.tabs[src]
    if (!tab)
      throw Error('Tab Not found')

    return this.tabs[src]
  }

  notify(img: HTMLImageElement) {
    const id = this.getTabFromSource(img.src)

    this.subject.next(<ImageNotification>{id, img})
    delete this.tabs[img.src]
  }

}
