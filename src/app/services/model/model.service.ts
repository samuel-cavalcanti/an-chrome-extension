import {Injectable} from '@angular/core';
import {ClassName} from "../../interfaces/class-name";
import * as tf from "@tensorflow/tfjs";
import {Observer, Subject, Subscription} from "rxjs";
import {FilterNotification, ImageNotification} from "../../interfaces/notifications";
import {ReasonsTable} from "../../classes/reasons-table/reasons-table";
import Module from "../../../classes/module";

@Injectable({
  providedIn: 'root'
})
export class ModelService extends Module<ImageNotification, FilterNotification> {


  // Size of the image expected by TeddyFilter model.
  // The minimum image size to consider classifying.  Below this limit the
  // extension will refuse to classify the image.
  private sizeExpected: number = 200
  private ONE_SECOND_IN_MS: number = 1000

  private modelPath: string = chrome.runtime.getURL("assets/modelJS/model.json")
  private className: ClassName = <ClassName>{0: "Not porn", 1: "porn"}
  private model: tf.LayersModel


  constructor() {
    super()
    // this.modelPath = "https://tfhub.dev/google/imagenet/mobilenet_v2_100_224/classification/2"; //test

    this.loadModel().then((totalTime: number) => {
      console.log(`Model loaded and initialized in ${totalTime} ms...`);
    }, (error) => {
      console.log(`Unable of load model`, error)
    })

  }

  error(e): void {

  }

  complete(): void {

  }

  private async loadModel(): Promise<number> {
    console.log('Loading model...');

    const startTime = performance.now();

    this.model = await tf.loadLayersModel(this.modelPath);

    return Math.floor(performance.now() - startTime);

  }

  private async getTheBestClass(logIts) {
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
      .then((pred: string) => {
        this.subject.next({id: message.id, predict: pred, imgSrc: message.img.src})
      })


  }

  async startToPredict(image: HTMLImageElement): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      const logIts = tf.tidy(this.tinyFunction.bind(this, image));

      resolve(this.getTheBestClass(logIts))
    })
  }


  // The second start time excludes the extraction and preprocessing and
  // includes only the predict() call.
  // Warms up the model by causing intermediate tensor values
  // to be built and pushed to GPU.
  private tinyFunction(img: HTMLImageElement) {


    // The first start time includes the time it takes to extract the image
    // from the HTML and preprocess it, in additon to the predict() call.
    const image = tf.browser.fromPixels(img).toFloat();
    // TeddyFilter expects images to be normalized between 0 and 1.
    const normalized = image.div(tf.scalar(255.0));
    const batched = normalized.reshape([1, this.sizeExpected, this.sizeExpected, 3]);
    return this.model.predict(batched)


  }

}
