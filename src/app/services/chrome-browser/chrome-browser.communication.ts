
import Module from "../../../classes/module";
import {ContentNotification, FilterNotification, Notification} from "../../interfaces/notifications";
import Port = chrome.runtime.Port;



export class ChromeBrowserCommunication extends Module<FilterNotification, Notification> {

  private static erros = {
    enableContentScript: new Error("Must enable Chrome Content Scripts"),
    uuidUndefined : new Error('UUID is undefined')
  }

  private static checkPermissions() {
    if (!chrome.runtime.getURL)
      throw ChromeBrowserCommunication.erros.enableContentScript
  }

  private ports: { [key: string]: Port }


  constructor() {
    super()

    this.ports = {}

    ChromeBrowserCommunication.checkPermissions()


  }

  tryToStart() {
    chrome.runtime.onConnect.addListener(this.onConnect.bind(this))
  }


  get modelURL(): string {
    return chrome.runtime.getURL("assets/modelJS/model.json");
  }

  get classesNameURL(): string {
    return chrome.runtime.getURL("assets/modelJS/classes.json")
  }


  complete() {
  }

  error(e) {
  }

  next(notification: FilterNotification) {
    this.ports[notification.id].postMessage(notification)
  }


  private onConnect(port: Port) {

    this.ports[port.name] = port

    port.onMessage.addListener(this.listener.bind(this))
    port.onDisconnect.addListener(this.disconnect.bind(this, port.name))

  }

  private listener(notification: ContentNotification) {

    if (notification.urlImages) {
      // console.log("receive", notification.urlImages.length)
      this.notifyImages(notification.urlImages, notification.message);
    }

  }

  private disconnect(id: string) {
    delete this.ports[id]
  }


  private notifyImages(urlImages: Array<string>, uuid: string) {

    for (const url of urlImages)
      this.subject.next({message: url, id: uuid})

  }


}
