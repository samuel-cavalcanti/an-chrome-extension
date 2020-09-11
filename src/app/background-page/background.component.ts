import {Component} from "@angular/core"
import {ConvolutionalNeuralNetwork} from "./convolutional-neural-network/convolutional-neural-network"
import {LoadImage} from "./load-image/load-image"
import {ClassifierManager} from "./classifier-manager/classifier-manager"
import {ChromeBackgroundCommunication} from "./background-communication/chrome-browser/chrome-background-communication"
import {ENABLE_LOGGERS, TimeLogger} from "../../utils/logger/time-logger"
import {BrowserCommunication} from "../../utils/browser-communication"
import {Notification} from "../interfaces/notifications"


@Component({
    selector: "app-background",
    templateUrl: "./background.component.html",
})


export class BackgroundComponent {

    private readonly cnn: ConvolutionalNeuralNetwork
    private readonly loadImage: LoadImage
    private readonly browser: BrowserCommunication<Notification, Notification>
    private readonly classifierManager: ClassifierManager
    private loggerLoadImage: TimeLogger
    private backgroundTimeLogger: TimeLogger



    constructor() {
        this.classifierManager = new ClassifierManager()
        this.cnn = new ConvolutionalNeuralNetwork()
        this.loadImage = new LoadImage()
        this.browser = BackgroundComponent.selectBrowserBackgroundCommunication()

        this.subscribes()

        if (ENABLE_LOGGERS) {
            this.startLoggers()
        }
        this.startFilter()


    }


    static selectBrowserBackgroundCommunication(): ChromeBackgroundCommunication {

        if (chrome) {
            return new ChromeBackgroundCommunication()
        } else {
            throw new Error("Not implemented")
        }

    }

    private startFilter() {
        ENABLE_LOGGERS ? console.log("Loggers are enabled") : console.log("Loggers are disabled")

        this.browser.tryToStart()


    }

    private subscribes() {

        this.cnn.observe(this.browser)
        this.cnn.observe(this.loadImage)
        this.cnn.observe(this.classifierManager)

        this.loadImage.observe(this.browser)

        this.browser.observe(this.cnn)
        this.browser.observe(this.classifierManager)

        this.classifierManager.observe(this.browser)


    }

    private startLoggers() {
        this.loggerLoadImage = new TimeLogger("time_to_load_image_in_background")
        this.backgroundTimeLogger = new TimeLogger("cnn_time_to_predict_image")

        this.loggerLoadImage.observe(this.browser)
        this.loggerLoadImage.observe(this.loadImage)


        this.backgroundTimeLogger.observe(this.loadImage)
        this.backgroundTimeLogger.observe(this.cnn)
  }

}
