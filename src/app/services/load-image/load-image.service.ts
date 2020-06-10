import {Injectable} from '@angular/core';

import {ImageSize} from "../../interfaces/image-size";
import {Observer, Subject} from "rxjs";
import {ImageNotification, Notification} from "../../interfaces/notifications";
import {ReasonsTable} from "../../classes/reasons-table/reasons-table";
import Module from "../../../classes/module";

@Injectable({
  providedIn: 'root'
})
export class LoadImageService extends Module<Notification, ImageNotification> {
  imageSize: ImageSize = <ImageSize>{expected: 200, min: 40}


  private images: { [key: string]: string } = {}


  constructor() {
    super()
  }

   error(e): void {

  }

   complete(): void {

  }

  next(notification: Notification) {


    if (notification.id === undefined) {
      console.log(notification, ReasonsTable.No_tab_No_prediction)
      return
    }


    /*
 * Creates a dom element and loads the image pointed to by the provided src.
 */
    const img = document.createElement('img');
    img.addEventListener('error', this.onError.bind(this))
    img.addEventListener('load', this.onLoad.bind(this))
    img.src = notification.message
    this.images[notification.message] = notification.id
  }

  onError(event) {
    // const notification: Notification = <Notification>{
    //   id: this.images[event.target.src],
    //   message: ReasonsTable.Could_not_load_image_from_external_source
    // }
    // console.log("On Error", notification)

    delete this.images[event.target.src]


  }

  onLoad(event) {
    const imgTarget = (<HTMLImageElement>event.target)
    if ((imgTarget.height && imgTarget.height >= this.imageSize.min) || (imgTarget.width && imgTarget.width >= this.imageSize.min)) {
      imgTarget.width = this.imageSize.expected;
      imgTarget.height = this.imageSize.expected;
      this.notify(imgTarget)
      return
    }

    // const message = `${ReasonsTable.Image_size_too_small} width ${imgTarget.naturalHeight}  height ${imgTarget.naturalHeight}`
    // console.log(message)
  }

  notify(img: HTMLImageElement) {
    const id = this.images[img.src]



    this.subject.next({id, img})
    delete this.images[img.src]
  }

}
