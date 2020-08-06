import * as tf from "@tensorflow/tfjs";
import {ClassName, Predict} from "../../../interfaces/class-name";

import {FilterNotification, ImageNotification} from "../../../interfaces/notifications";
import {ReasonsTable} from "../../../classes/reasons-table/reasons-table";
import Module from "../../../../classes/module";


export class ConvolucionalNeuralNetwork extends Module<ImageNotification, FilterNotification> {


  private sizeExpected: number = 200
  private ONE_SECOND_IN_MS: number = 1000

  private className: ClassName
  private model: tf.LayersModel


  constructor() {
    super()
    // this.modelPath = "https://tfhub.dev/google/imagenet/mobilenet_v2_100_224/classification/2"; //test


  }

  load(classesNameURL: string, savedModelURL: string) {
    ConvolucionalNeuralNetwork.loadClassName(classesNameURL).then((classes) => {
      this.className = classes
      console.log(this.className[0])
      console.log(this.className[1])
    })

    ConvolucionalNeuralNetwork.loadModel(savedModelURL).then((model: tf.LayersModel) => {
      this.model = model
    }, (error) => {
      console.log(`Unable of load model`, error)
    })
  }

  error(e): void {

  }

  complete(): void {

  }

  private static async loadClassName(path: string): Promise<ClassName> {
    return new Promise<ClassName>((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.addEventListener('load', () => {

        resolve(JSON.parse(xhr.responseText))
      })

      xhr.addEventListener('error', () => {
        reject(`Error not solver request`)
      })
      xhr.open("GET", path, true);
      xhr.send()
    })


  }

  private static async loadModel(path: string): Promise<tf.LayersModel> {
    console.log('Loading model...');

    const startTime = performance.now();

    const model = await tf.loadLayersModel(path);

    console.log(`Model loaded and initialized in ${Math.floor(performance.now() - startTime)} ms...`);

    return model

  }

  private async getTheBestClass(logIts: any): Promise<Predict> {
    const {indices} = tf.topk(logIts, 1, true);
    const argMax = await indices.data();

    return this.className[argMax];
  }

  next(message: ImageNotification) {

    if (!this.model) {
      setTimeout(this.next.bind(this), this.ONE_SECOND_IN_MS, message)
      console.warn(ReasonsTable.Waiting_for_model_to_load)
      return
    }

    this.startToPredict(message.img)
      .then((pred: Predict) => {
        this.subject.next({id: message.id, predict: pred, imgSrc: message.img.src})
      })


  }

  async startToPredict(image: HTMLImageElement): Promise<Predict> {
    return new Promise<Predict>(async (resolve, reject) => {
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
