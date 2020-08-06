import {Injectable} from '@angular/core';
import {ConvolucionalNeuralNetwork } from "./convolucional-neural-network/convolucional-neural-network";

import {LoadImageService} from "../load-image/load-image.service";
import {ChromeBrowserCommunication} from "../chrome-browser/chrome-browser.communication";

@Injectable({
  providedIn: 'root'
})
export class TeddyFilterService {


  private model: ConvolucionalNeuralNetwork

  private loadImage: LoadImageService

  private browser: ChromeBrowserCommunication

  constructor() {

    this.model = new ConvolucionalNeuralNetwork()
    this.loadImage = new LoadImageService()
    this.model.subscribe(this.loadImage)

  }

  startFilter() {

    try {
      this.browser = this.selectBrowser()
      this.model.load(this.browser.modelURL, this.browser.classesNameURL)
      this.loadImage.subscribe(this.browser)
      this.browser.subscribe(this.model)
      this.browser.tryToStart()

    } catch (e) {
      console.info(e)
    }

  }

  selectBrowser(): ChromeBrowserCommunication {
    if (chrome)
      return new ChromeBrowserCommunication()


    throw new Error("Not support the current browser")
  }


}
