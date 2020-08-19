import * as tf from "@tensorflow/tfjs";
import LoadClassNames from "../load-class-names/load-class-names";
import Module from "../../../../classes/module";
import {
  CnnModelSettingNotification,
  Notification,
  NotificationTypes,
  TensorFlowHubModelNotification
} from "../../../interfaces/notifications";
import {ClassNames} from "../../../interfaces/class-names";


export class ConvolutionalNeuralNetworkSettings extends Module<Notification, Notification> {

  private callbacks = {
    [NotificationTypes.TensorFlowHubModelNotification]: this.hubModelNotification.bind(this),
  }

  private currentSettings: TensorFlowHubModelNotification

  constructor() {
    super();
  }

  private localClassesNames = {
    ["imagenet-ilsvrc-2012-cls"]: chrome.runtime.getURL("assets/modelJS/Image-net-class.json"),
    teddyFilter: chrome.runtime.getURL("assets/modelJS/classes.json")
  }

  private async loadCnnModel(tensorHubUrl: string): Promise<tf.GraphModel> {
    console.log('Loading model...');

    const startTime = performance.now();

    const cnnModel = await tf.loadGraphModel(tensorHubUrl, {fromTFHub: true});

    console.log(`Model loaded and initialized in ${Math.floor(performance.now() - startTime)} ms...`);

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
    console.info("hubModelNotification", message)


    if (this.localClassesNames[message.cnnModelHub.dataset]) {
      if (this.currentSettings && this.currentSettings.cnnModelHub.url == message.cnnModelHub.url)
        return

      this.currentSettings = message
      const model = await this.loadCnnModel(message.cnnModelHub.url)
      const classNames = await LoadClassNames.loadClassByXMLRequest(this.localClassesNames[message.cnnModelHub.dataset])
      this.notify(model, classNames, message)
    }

  }


  private notify(cnnModel: tf.GraphModel, classNames: ClassNames, userInterfaceMessage: TensorFlowHubModelNotification) {

    const cnnMessage: CnnModelSettingNotification = {
      id: "ConvolutionalNeuralNetworkSettings",
      type: NotificationTypes.CnnModelSettingNotification,
      cnnModel,
      classNames
    }

    this.subject.next(cnnMessage)
    this.subject.next(<TensorFlowHubModelNotification>{...userInterfaceMessage, classNames: classNames})

  }


}
