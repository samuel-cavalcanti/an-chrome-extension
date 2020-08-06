import {ContentNotification, FilterNotification, Notification} from "../../../interfaces/notifications";
import Module from "../../../../classes/module";
import Port = chrome.runtime.Port;



export class ChromeMessenger extends Module<FilterNotification, Notification> {


  private port: Port


  constructor() {
    super()

  }

  error(e): void {

  }

  complete(): void {
  }



  next(notification: FilterNotification) {

    this.port.postMessage(notification)

  }

  start(port: Port) {
    this.port = port

    port.onMessage.addListener(this.listener.bind(this))
    port.onDisconnect.addListener(this.disconnect.bind(this))
  }

  private listener(notification: ContentNotification) {

    if (notification.urlImages) {
      // console.log("receive", notification.urlImages.length)
      this.notifyImages(notification.urlImages, this.port.name);
    }

  }


  private notifyImages(urlImages: Array<string>, uuid: string) {

    for (const url of urlImages)
      this.subject.next({message: url, id: uuid})

  }


  private disconnect() {

    this.unsubscribe()

  }


}

