import {Component} from '@angular/core';
import {ConvolutionalNeuralNetwork} from "./convolutional-neural-network/convolutional-neural-network";
import {LoadImage} from "./load-image/load-image";
import {ConvolutionalNeuralNetworkSettings} from "./convolutional-neural-network/convolutional-neural-network-settings/convolutional-neural-network-settings";
import {ChromeBackgroundCommunication} from "../services/browser-communication/chrome-browser/background-communication/chrome-background-communication";

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  // styleUrls: ['./cnn-models.component.css']

})
export class BackgroundComponent {

  private cnn: ConvolutionalNeuralNetwork
  private loadImage: LoadImage
  private browser: ChromeBackgroundCommunication
  private cnnSettings: ConvolutionalNeuralNetworkSettings

  constructor() {
    this.cnnSettings = new ConvolutionalNeuralNetworkSettings()
    this.cnn = new ConvolutionalNeuralNetwork()
    this.loadImage = new LoadImage()
    this.browser = BackgroundComponent.selectBrowserBackgroundCommunication()

    this.subscribes()

    this.startFilter()


  }

  private startFilter() {

    this.browser.tryToStart()

  }

  private subscribes() {
    this.cnn.subscribe(this.browser)
    this.cnn.subscribe(this.loadImage)
    this.cnn.subscribe(this.cnnSettings)

    this.loadImage.subscribe(this.browser)

    this.browser.subscribe(this.cnn)
    this.browser.subscribe(this.cnnSettings)

    this.cnnSettings.subscribe(this.browser)
  }


  static selectBrowserBackgroundCommunication(): ChromeBackgroundCommunication {

    if (chrome)
      return new ChromeBackgroundCommunication()
    else
      throw new Error("Not implemented")

  }

}
