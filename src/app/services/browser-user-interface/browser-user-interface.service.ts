import {Injectable} from '@angular/core';
import {Notification, NotificationTypes, TensorFlowHubModelNotification} from "../../interfaces/notifications";
import {TensorflowHubModel} from "../../interfaces/tensorflow-hub-model";
import {UserInterfaceCommunication} from "../browser-communication/user-interface-communication/user-interface-communication";
import {ChromeUserInterfaceCommunication} from "../browser-communication/chrome-browser/user-interface-communication/chrome-user-interface-communication";
import Module from "../../../classes/module";
import {Observer} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BrowserUserInterfaceService extends Module<Notification, Notification> {
  private callbacks = {
    [NotificationTypes.TensorFlowHubModelNotification]: this.browserNotification.bind(this)
  }


  private readonly browser: UserInterfaceCommunication<Notification, Notification>

  private currentCnnModelSettings: TensorFlowHubModelNotification


  constructor() {
    super()
    console.info("create User Interface Communication")
    this.browser = BrowserUserInterfaceService.selectBrowserUserInterfaceCommunication()
    this.subscribe(this.browser)
    this.browser.tryToStart()
  }


  selectTensorHubModel(cnnModel: TensorflowHubModel) {

    const newNotification: TensorFlowHubModelNotification = {...this.currentCnnModelSettings, cnnModelHub: cnnModel}
    this.browser.setCnnModelSettings(newNotification)

  }

  changeFilterStatus(index: number) {
    const newNotification: TensorFlowHubModelNotification = {...this.currentCnnModelSettings}
    newNotification.enables[index] = !newNotification.enables[index]
    this.browser.setCnnModelSettings(newNotification)
  }

  static selectBrowserUserInterfaceCommunication(): UserInterfaceCommunication<Notification, Notification> {
    if (chrome)
      return new ChromeUserInterfaceCommunication()
    else
      throw new Error("Not implemented")

  }


  next(notification: Notification): void {
    console.log("browser user interface browserNotification: ", notification)
    console.log(this.callbacks)


    if (this.callbacks[notification.type])
      this.callbacks[notification.type](notification)

  }

  error(e: any): void {

  }

  complete(): void {

  }

  addCnnModelSettingsObserver(observer: Observer<TensorFlowHubModelNotification>) {
    this.subject.subscribe(observer)
    this.notifyAll()
  }


  private browserNotification(notification: TensorFlowHubModelNotification) {

    this.currentCnnModelSettings = notification


    this.notifyAll()
  }

  private notifyAll() {
    if (this.currentCnnModelSettings)
      this.subject.next(this.currentCnnModelSettings)
  }


}
