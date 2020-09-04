import {Component} from "@angular/core"
import {ConvolutionalNeuralNetwork} from "./convolutional-neural-network/convolutional-neural-network"
import {LoadImage} from "./load-image/load-image"
import {ClassifierManager} from "./classifier-manager/classifier-manager"
import {ChromeBackgroundCommunication} from "./background-communication/chrome-browser/chrome-background-communication"

@Component({
  selector: "app-background",
  templateUrl: "./background.component.html",
  // styleUrls: ['./models-page.component.css']

})
export class BackgroundComponent {

  constructor() {
    this.cnnSettings = new ClassifierManager()
    this.cnn = new ConvolutionalNeuralNetwork()
    this.loadImage = new LoadImage()
    this.browser = BackgroundComponent.selectBrowserBackgroundCommunication()

    this.subscribes()

    this.startFilter()


  }

  private cnn: ConvolutionalNeuralNetwork
  private loadImage: LoadImage
  private browser: ChromeBackgroundCommunication
  private cnnSettings: ClassifierManager


  static selectBrowserBackgroundCommunication(): ChromeBackgroundCommunication {

    if (chrome) {
      return new ChromeBackgroundCommunication()
    }
    else {
      throw new Error("Not implemented")
    }

  }

  private startFilter() {

    this.browser.tryToStart()


  }

  private subscribes() {
    this.cnn.addObserver(this.browser)
    this.cnn.addObserver(this.loadImage)
    this.cnn.addObserver(this.cnnSettings)

    this.loadImage.addObserver(this.browser)
    this.loadImage.addObserver(this.cnnSettings)

    this.browser.addObserver(this.cnn)
    this.browser.addObserver(this.cnnSettings)

    this.cnnSettings.addObserver(this.browser)
  }

}
