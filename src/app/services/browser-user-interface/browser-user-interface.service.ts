import {Injectable} from '@angular/core';
import {Notification, NotificationTypes, TensorFlowHubModelNotification} from "../../interfaces/notifications";
import {TensorflowHubModel} from "../../interfaces/tensorflow-hub-model";
import {UserInterfaceCommunication} from "../browser-communication/user-interface-communication/user-interface-communication";
import {ChromeUserInterfaceCommunication} from "../browser-communication/chrome-browser/user-interface-communication/chrome-user-interface-communication";
import Module from "../../../classes/module";
import {ClassNames} from "../../interfaces/class-names";
import {Observer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BrowserUserInterfaceService extends Module<Notification, Notification> {
  private callbacks = {
    [NotificationTypes.TensorFlowHubModelNotification]: this.cnnModelSettings.bind(this)
  }


  private readonly browser: UserInterfaceCommunication<Notification, Notification>

  private currentModel: TensorflowHubModel

  private classNames: ClassNames


  constructor() {
    super()
    console.info("create User Interface Communication")
    this.browser = BrowserUserInterfaceService.selectBrowserUserInterfaceCommunication()
    this.subscribe(this.browser)
    this.browser.tryToStart()
  }


  selectTensorHubModel(cnnModel: TensorflowHubModel) {

    this.browser.changeCnnModelSettings(cnnModel)

  }

  get currentCnnModel(): TensorflowHubModel | undefined {
    if (this.currentModel)
      return this.currentModel

    this.browser.getCnnModelSettingsFromBackground()

    return undefined

  }

  get currentClassNames(): ClassNames | undefined {
    if (this.classNames)
      return this.classNames

    this.browser.getCnnModelSettingsFromBackground()

    return undefined
  }


  static selectBrowserUserInterfaceCommunication(): UserInterfaceCommunication<Notification, Notification> {
    if (chrome)
      return new ChromeUserInterfaceCommunication()
    else
      throw new Error("Not implemented")

  }


  next(notification: Notification): void {

    if (this.callbacks[notification.type])
      this.callbacks[notification.type](notification)

  }

  error(e: any): void {

  }

  complete(): void {

  }

  notifyCurrentSettings(observer: Observer<TensorFlowHubModelNotification>) {
    this.subject.subscribe(observer)
  }


  private cnnModelSettings(notification: TensorFlowHubModelNotification) {


    this.classNames = notification.classNames

    this.currentModel = notification.cnnModelHub


    this.subject.next(notification)
  }


}
