import {FilterNotification, Notification} from "../app/interfaces/notifications";

export default class DocumentObserver {
  checkTable: any = {}


  constructor() {

    chrome.runtime.onMessage.addListener(this.listener.bind(this))

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
    let imagesTable: Array<string> = new Array(document.images.length)

    for (let i = 0; i < document.images.length; i++) {
      if (document.images[i].src.length) {
        imagesTable[i] = document.images[i].src
        this.checkTable[document.images[i].src] = document.images[i]
      }
    }


    return imagesTable;
  }

  private getAllCurrentVideos(): Array<string> {
    let videos: any = document.getElementsByTagName("video")
    let videosTable: Array<string> = new Array(videos.length)

    for (let video of videos) {
      const url = DocumentObserver.getUrlVideo(video)
      if (url.length) {
        this.checkTable[url] = video
        videosTable.push(video)
      }

    }

    return videosTable;

  }


  private checkSrc(target: HTMLElement, url: string): boolean {
    if (this.checkTable[url] == undefined) {
      this.checkTable[url] = target;
      return false;
    }
    return true;

  }

  private static getUrlVideo(video: HTMLVideoElement): string {

    if (video.src.substring(0, 4) == "blob" || !video.src) {
      if (video.baseURI) {
        return video.baseURI;
      }
    }
    return video.src;
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

    try {
      chrome.runtime.sendMessage({urlImages, urlVideos})
    } catch (e) {
      console.log(`urlImages`, urlVideos)
      console.log(`urlImages`, urlImages)
    }

  }

  private listener(notification: FilterNotification) {
    
    if (notification.predict == "Not porn")
      this.changeCss(notification.imgSrc)
  }


  private changeCss(src: string) {

    if (this.checkTable[src])
      this.checkTable[src].setAttribute("style", "display: block !important;")

  }

}

