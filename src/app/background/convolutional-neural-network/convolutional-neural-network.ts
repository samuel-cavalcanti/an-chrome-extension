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


  private sizeExpected: number = 200
  private ONE_SECOND_IN_MS: number = 1000

  private classNames: ClassNames
  private model: tf.GraphModel


  constructor() {
    super()
    // this.modelPath = "https://tfhub.dev/google/imagenet/mobilenet_v2_100_224/classification/2"; //test
    // https://tfhub.dev/google/imagenet/mobilenet_v2_130_224/classification/4
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
      console.warn(ReasonsTable.Waiting_for_model_to_load)
      return
    }

    this.startToPredict(message.img)
      .then((pred: string) => {
        this.subject.next(<FilterNotification>{id: message.id, predict: pred, imgSrc: message.img.src})
      })
  }

  private settingsNotification(message: CnnModelSettingNotification) {
    this.model = message.cnnModel
    this.classNames = message.classNames
    console.info("Model is loaded")


  }


  private async getTheBestClass(logIts: any): Promise<string> {
    const {indices} = tf.topk(logIts, 1, true);
    const argMax = await indices.data();

    return this.classNames[argMax];
  }


  protected async startToPredict(image: HTMLImageElement): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      const logIts = tf.tidy(this.tinyFunction.bind(this, image));

      resolve(this.getTheBestClass(logIts))
    })
  }


  private tinyFunction(img: HTMLImageElement) {

    const image = tf.browser.fromPixels(img).toFloat();

    const normalized = image.div(tf.scalar(255.0));

    const batched = normalized.reshape([1, this.sizeExpected, this.sizeExpected, 3]);
    return this.model.predict(batched)

  }

}
