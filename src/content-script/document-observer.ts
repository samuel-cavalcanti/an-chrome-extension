import {
  ContentNotification,
  FilterNotification,
  Notification,
  NotificationTypes
} from "../app/interfaces/notifications";
import {Observer, Subject} from "rxjs";

export default class DocumentObserver {

  subject = new Subject<Notification>()

  observer: Observer<Notification> = {
    next: this.listener.bind(this),
    error: () => {
    },
    complete: () => {
    }
  }

  private checkTable: { [key: string]: HTMLElement } = {}

  private errorMessages = {

    noSrc: new Error('Cannot read src, property undefined'),

    noArray: new Error('Cannot read urlImages or urlVideos, property undefined')
  }

  start() {
    this.sendAllCurrentUrlData()


    this.createObserver()
  }


  private sendAllCurrentUrlData() {
    const urlImages: Array<string> = this.getAllCurrentImages()
    const urlVideos: Array<string> = this.getAllCurrentVideos()

    this.sendData(urlImages, urlVideos)


  }

  private getAllCurrentImages(): Array<string> {
    let imagesTable: Array<string> = new Array<string>(document.images.length)

    for (let i = 0; i < document.images.length; i++) {
      if (document.images[i].src.length) {
        imagesTable[i] = document.images[i].src
        this.checkTable[document.images[i].src] = document.images[i]
      }
    }


    return imagesTable;
  }

  private getAllCurrentVideos(): Array<string> {
    let elements: any = document.getElementsByTagName("video")
    let videos: Array<string> = new Array<string>(elements.length)

    for (const element of elements) {
      const url = DocumentObserver.getUrlVideo(element)
      if (url.length) {
        this.checkTable[url] = element
        videos.push(element)
      }

    }

    return videos;

  }


  private checkSrc(target: HTMLElement, url: string): boolean {
    if (this.checkTable[url] == undefined) {
      this.checkTable[url] = target;
      return false;
    }
    return true;

  }

  private static getUrlVideo(video: HTMLVideoElement): string {
    if (video == undefined)
      throw new Error('video is undefined')

    if (video.src.substring(0, 4) == "blob" || !video.src) {
      if (video.baseURI) {
        return video.baseURI;
      }
    }
    if (video.src)
      return video.src;

    return ""
  }

  private getAllNewData(mutations: MutationRecord[]): { urlImages: Array<string>, urlVideos: Array<string> } {
    let urlImages: Array<string> = new Array<string>()
    let urlVideos: Array<string> = new Array<string>()

    for (let mutation of mutations) {
      let target: any = mutation.target;

      if (target instanceof HTMLImageElement) {
        if (!this.checkSrc(target, target.src)) {
          urlImages.push(target.src)
        }
      } else if (target instanceof HTMLVideoElement) {
        const src = DocumentObserver.getUrlVideo(target)
        if (!this.checkSrc(target, src)) {
          urlVideos.push(src)

        }
      }

    }


    return {urlImages, urlVideos}
  }

  private observerImages(mutations: MutationRecord[], observer: MutationObserver) {
    let data: { urlImages: Array<string>, urlVideos: Array<string> } = this.getAllNewData(mutations);

    this.sendData(data.urlImages, data.urlVideos);

  }

  private createObserver() {
    let observer: MutationObserver = new MutationObserver(this.observerImages.bind(this))
    const config: MutationObserverInit = {
      childList: false,
      attributes: true,
      characterData: true,
      subtree: true,
      // attributeFilter: ["src"],
    }

    observer.observe(document.body, config)

  }


  private sendData(urlImages: Array<string>, urlVideos: Array<string>) {

    if (urlImages == undefined || urlVideos == undefined)
      throw this.errorMessages.noArray

    const notification: ContentNotification = {
      id: "replace  this in communication",
      type: NotificationTypes.ContentNotification,
      urlImages,
      urlVideos
    }

    this.subject.next(notification)

  }

  private listener(notification: FilterNotification) {

    if (notification.type != NotificationTypes.FilterNotification)
      return


    if (notification.predict == "show") {
      this.changeCss(notification.imgSrc)

    }


  }


  private changeCss(src: string) {

    if (src == undefined)
      throw this.errorMessages.noSrc

    if (this.checkTable[src]) //setAttribute("style", "display: !important")
      this.checkTable[src].setAttribute("style", "display: inline !important")

  }

}

