import {ContentNotification, FilterNotification, Notification} from "../../interfaces/notifications";
import Port = chrome.runtime.Port;
import Module from "../../../classes/module";


export class ChromeMessengerService extends Module<FilterNotification, Notification> {


  private port: Port



  constructor(port: Port) {
    super()

    this.port = port

    port.onMessage.addListener(this.listener.bind(this))
    port.onDisconnect.addListener(this.disconnect.bind(this))


  }

  error(e): void {

  }

  complete(): void {
    throw new Error("Method not implemented.");
  }

  next(notification: FilterNotification) {

    this.port.postMessage(notification)


  }




  private listener(notification: ContentNotification) {

    if (notification.urlImages) {
      console.log("receive", notification.urlImages.length)
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

