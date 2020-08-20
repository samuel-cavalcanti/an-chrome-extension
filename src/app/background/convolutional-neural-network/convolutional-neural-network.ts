import * as tf from "@tensorflow/tfjs";
import {ClassNames} from "../../interfaces/class-names";

import {
  CnnModelSettingNotification,
  FilterNotification,
  ImageNotification,
  Notification,
  NotificationTypes
} from "../../interfaces/notifications";
import {ReasonsTable} from "../../classes/reasons-table/reasons-table";
import Module from "../../../classes/module";


export class ConvolutionalNeuralNetwork extends Module<Notification, Notification> {

  private ONE_SECOND_IN_MS: number = 1000

  private classNames: ClassNames
  private model: tf.GraphModel
  private enables: Array<boolean>


  constructor() {
    super()
    console.info(tf.version);
  }

  error(e): void {

  }

  complete(): void {

  }

  next(message: Notification) {

    if (message.type == NotificationTypes.ImageNotification)
      return this.imageNotification(message as ImageNotification)

    if (message.type == NotificationTypes.CnnModelSettingNotification)
      return this.settingsNotification(message as CnnModelSettingNotification)

  }

  private imageNotification(message: ImageNotification) {
    if (!this.model) {
      setTimeout(this.next.bind(this), this.ONE_SECOND_IN_MS, message)
      console.log(ReasonsTable.Waiting_for_model_to_load)
      return
    }

    this.startToPredict(message.img)
      .then((pred: string) => {
        console.log("CNN pred:", pred)
        this.subject.next(<FilterNotification>{
          type: NotificationTypes.FilterNotification,
          id: message.id,
          predict: pred,
          imgSrc: message.img.src
        })
      })
  }

  private settingsNotification(message: CnnModelSettingNotification) {
    if (message.cnnModel)
      this.model = message.cnnModel
    if (message.classNames)
      this.classNames = message.classNames
    if (message.enables)
      this.enables = message.enables

    if (!this.model)
      return

    console.log("Model inputs: ", this.model.inputs)
  }


  private async getTheBestClass(logIts: tf.Tensor): Promise<string> {
    const {indices} = tf.topk(logIts, 1, true);
    const argMax = await indices.data();

    console.log(this.classNames[argMax[0]])
    return this.enables[argMax[0]] ? "show" : "not show"
  }


  protected async startToPredict(image: HTMLImageElement): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      console.log(" try to predict image", image)
      try {
        const logIts = tf.tidy(this.tinyFunction.bind(this, image));
        resolve(this.getTheBestClass(logIts as tf.Tensor))
      } catch (e) {
        // console.error("Unable to execute tinyFunction", e)
        reject(e)
      }


    })
  }


  private tinyFunction(img: HTMLImageElement): tf.Tensor | tf.Tensor[] | tf.NamedTensorMap {

    const image = tf.browser.fromPixels(img).toFloat();


    const normalized = image.div(tf.scalar(255.0));
    const shape = this.model.inputs[0].shape


    const batched = normalized.reshape([1, 224, 224, 3]);


    return this.model.predict(batched)

  }

}
