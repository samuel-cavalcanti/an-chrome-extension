import {
  ContentNotification,
  Notification,
  NotificationTypes,
  TensorFlowHubModelNotification
} from "../../../../interfaces/notifications";
import {BrowserCommunication} from "../../browser-communication";
import Port = chrome.runtime.Port;

export const GET_CURRENT_SETTINGS_MESSAGE = "get current cnn settings"

export class ChromeBackgroundCommunication extends BrowserCommunication <Notification, Notification> {


  private static erros = {
    enableContentScript: new Error("Must enable Chrome Content Scripts"),
    enableStorage: new Error("Must add Storage permission"),
    uuidUndefined: new Error('UUID undefined'),
    urlsUndefined: new Error('URLS undefined')
  }

  private callbacks = {
    [NotificationTypes.Notification]: this.simpleNotifications.bind(this),
    [NotificationTypes.ContentNotification]: this.notifyImages.bind(this),
    [NotificationTypes.TensorFlowHubModelNotification]: this.notifyCnnSettings.bind(this)
  }

  private storeKey = "settings"

  private readonly ports: { [key: string]: Port }

  private userInterfacePort: Port

  constructor() {
    super()
    this.ports = {}
    console.info("ChromeBackgroundCommunication")
  }

  checkPermissions() {
    if (chrome.runtime == undefined || chrome.runtime.getURL == undefined)
      throw ChromeBackgroundCommunication.erros.enableContentScript

    if (chrome.storage == undefined)
      throw ChromeBackgroundCommunication.erros.enableStorage
  }

  tryToStart() {
    try {
      this.checkPermissions()
      chrome.runtime.onConnect.addListener(this.onConnect.bind(this))
      this.loadLocalData()
    } catch (e) {
      console.log("Unable to  start runtime")
      console.info(e)
    }


  }


  complete() {
  }

  error(e) {
  }

  next(notification: Notification) {

    if (this.ports[notification.id])
      this.ports[notification.id].postMessage(notification)


    if (notification.type == NotificationTypes.TensorFlowHubModelNotification)
      this.storeSettings(notification as TensorFlowHubModelNotification)
  }


  private onConnect(port: Port) {

    this.ports[port.name] = port

    port.onMessage.addListener(this.listener.bind(this))
    port.onDisconnect.addListener(this.disconnect.bind(this))

  }

  private listener(notification: Notification, port: Port) {

    if (this.callbacks[notification.type])
      this.callbacks[notification.type](notification, port)

  }

  private disconnect(port: Port) {
    delete this.ports[port.name]
  }


  private notifyImages(notification: ContentNotification, port: Port) {

    const urlImages = notification.urlImages

    if (port == undefined)
      throw ChromeBackgroundCommunication.erros.uuidUndefined

    if (urlImages == undefined)
      throw ChromeBackgroundCommunication.erros.urlsUndefined

    for (const url of urlImages)
      if (url)
        this.subject.next(<Notification>{message: url, id: port.name, type: NotificationTypes.ImageSourceNotification})

  }

  private notifyCnnSettings(notification: TensorFlowHubModelNotification, port: Port) {

    notification.id = port.name


    this.subject.next(notification)
  }


  private loadLocalData() {
    chrome.storage.local.get([this.storeKey], this.callbackStorage.bind(this))
  }

  private callbackStorage(result: any) {

    const notification: TensorFlowHubModelNotification = result.settings

    if (notification) {
      this.subject.next(notification)
      this.next(notification)
    } else if (this.userInterfacePort) {
      this.next(<TensorFlowHubModelNotification>{
        id: this.userInterfacePort.name,
        cnnModelHub: {},
        classNames: {},
        type: NotificationTypes.TensorFlowHubModelNotification
      })
    }


  }

  private storeSettings(settings: TensorFlowHubModelNotification) {
    chrome.storage.local.set({[this.storeKey]: settings})
  }


  private simpleNotifications(notification: Notification, port: Port) {
    console.info("simpleNotifications", notification)
    if (notification.message == GET_CURRENT_SETTINGS_MESSAGE) {
      this.userInterfacePort = port
      this.loadLocalData()
    }
  }

}
