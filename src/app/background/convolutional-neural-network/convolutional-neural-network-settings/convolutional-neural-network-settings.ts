import * as tf from "@tensorflow/tfjs";
import Module from "../../../../classes/module";
import {
  CnnModelSettingNotification,
  Notification,
  NotificationTypes,
  TensorFlowHubModelNotification
} from "../../../interfaces/notifications";
import {ClassNames} from "../../../interfaces/class-names";
import LoadClassNames from "../load-class-names/load-class-names";


export class ConvolutionalNeuralNetworkSettings extends Module<Notification, Notification> {

  private callbacks = {
    [NotificationTypes.TensorFlowHubModelNotification]: this.hubModelNotification.bind(this),
  }

  private currentSettings: TensorFlowHubModelNotification

  constructor() {
    super();
  }

  private localClassesNames = {
    ["imagenet-ilsvrc-2012-cls"]: chrome.runtime.getURL("assets/modelJS/Image-net-class.json")
  }

  private async loadCnnModel(tensorHubUrl: string): Promise<tf.GraphModel | undefined> {

    if (!this.needToLoadModel(tensorHubUrl))
      return undefined


    console.log('Loading model...');

    const startTime = performance.now();

    const cnnModel = await tf.loadGraphModel(tensorHubUrl, {fromTFHub: true});

    console.log(`Model loaded  in ${Math.floor(performance.now() - startTime)} ms...`);

    return cnnModel
  }


  next(message: Notification) {

    if (this.callbacks[message.type])
      this.callbacks[message.type](message)


  }

  complete(): void {
  }

  error(e): void {
  }

  private async hubModelNotification(message: TensorFlowHubModelNotification) {
    console.info("CNN Settings hubModelNotification", message)


    if (this.localClassesNames[message.cnnModelHub.dataset]) {
      try {
        const model = await this.loadCnnModel(message.cnnModelHub.url)
        const classNames = await this.loadClassNames(message.cnnModelHub.dataset)
        this.updateSetting(message, classNames)
        this.notify(model)
      } catch (e) {
        console.warn("Unable update cnn settings: ", e)
      }

    }

  }


  private notify(cnnModel: tf.GraphModel) {

    const cnnMessage: CnnModelSettingNotification = {
      id: "ConvolutionalNeuralNetworkSettings",
      type: NotificationTypes.CnnModelSettingNotification,
      cnnModel: cnnModel,
      classNames: this.currentSettings.classNames,
      enables: this.currentSettings.enables
    }

    this.subject.next(cnnMessage)
    this.subject.next(this.currentSettings)
  }

  private async loadClassNames(dataset: string): Promise<ClassNames> {


    if (this.needToLoadClassNames(dataset))
      return LoadClassNames.loadClassByXMLRequest(this.localClassesNames[dataset])
    else
      return this.currentSettings.classNames

  }


  private needToLoadModel(url: string): boolean {
    if (!url)
      return false

    if (!this.currentSettings)
      return true

    if (!this.currentSettings.cnnModelHub)
      return true

    return this.currentSettings.cnnModelHub.url != url;

  }

  private needToLoadClassNames(dataset: string) {
    if (!dataset)
      return false

    if (!this.currentSettings)
      return true

    if (!this.currentSettings.cnnModelHub.dataset)
      return true

    return this.currentSettings.cnnModelHub.dataset != dataset
  }

  private updateSetting(notification: TensorFlowHubModelNotification, classNames: ClassNames) {
    const enables = notification.enables ? notification.enables : Object.values(classNames).map(() => true)
    const oldSettings = this.currentSettings ? this.currentSettings : {}
    this.currentSettings = {...oldSettings, ...notification, classNames: classNames, enables: enables}
  }

}
