import {Notification, NotificationTypes, TensorFlowHubModelNotification} from "../../../../interfaces/notifications"
import {USER_INTERFACE_COMMUNICATION_ID, UserInterfaceCommunication} from "../../user-interface-communication/user-interface-communication"
import {GET_CURRENT_SETTINGS_MESSAGE} from "../background-communication/chrome-background-communication"
import Port = chrome.runtime.Port

export class ChromeUserInterfaceCommunication extends UserInterfaceCommunication <Notification, Notification> {

  private port: Port

  constructor() {
    super()
  }

  checkPermissions(): void {
    if (!chrome.extension || !chrome.runtime) {
      throw Error("Unable to connect to background-page script")
    }
  }

  complete(): void {
  }

  error(e): void {
  }

  next(notification: Notification): void {
  }

  tryToStart(): void {
    this.checkPermissions()
    chrome.runtime.onMessage.addListener(this.listener.bind(this))
    this.port = chrome.runtime.connect({name: USER_INTERFACE_COMMUNICATION_ID})
    this.port.onMessage.addListener(this.listener.bind(this))


  }


  sendNotification(tensorflowHubModel: TensorFlowHubModelNotification): void {

    this.port.postMessage(tensorflowHubModel)
  }

  private listener(message: Notification) {
    this.subject.next(message)

  }

  getCnnModelSettingsFromBackground() {
    this.port.postMessage({
      message: GET_CURRENT_SETTINGS_MESSAGE,
      type: NotificationTypes.Notification
    } as Notification)
  }


}
