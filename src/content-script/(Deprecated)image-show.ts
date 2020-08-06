import {Observer} from "rxjs";
import {FilterNotification} from "../app/interfaces/notifications";

export default class DeprecatedImageShow {

  observer: Observer<FilterNotification> = {
    next: this.showImage.bind(this),
    error: () => {
    },
    complete: () => {
    }
  }


  private imageTable: { [key: string]: HTMLImageElement } = {}

  constructor() {

    this.mappingAllCurrentImages()
  }


  private mappingAllCurrentImages(): void {
    for (let i = 0; i < document.images.length; i++) {
      this.addImageTable(document.images[i])
    }
  }


  private showImage(notification: FilterNotification) {

    console.log("Show Image-> notification:", notification)

    if (notification.predict == "Not porn") {
      const img = this.findImgBySrc(notification.imgSrc)
      console.log("Show Image-> notification:", img)
      if (img !== undefined)
        DeprecatedImageShow.changeCss(img)
    }


  }

  private static changeCss(img: HTMLImageElement) {
    img.setAttribute("style", " -webkit-filter: blur(0px);")

  }

  private findImgBySrc(src: string): HTMLImageElement {
    // if (this.imageTable[src] !== undefined)
    //   return this.imageTable[src]

    return this.searchAll(src)

  }

  private searchAll(src: string): HTMLImageElement {

    for (let i = 0; i < document.images.length; i++) {
      const image = document.images[i]

      if (image.src === src) {
        return image
      }

      this.addImageTable(image)
    }
  }


  private addImageTable(image: HTMLImageElement) {
    if (this.imageTable[image.src] === undefined) {
      this.imageTable[image.src] = image
    }
  }

}
