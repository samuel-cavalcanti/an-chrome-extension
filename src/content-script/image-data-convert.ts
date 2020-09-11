import Module from "../utils/module"
import {ContentNotification, ImageDataNotification, Notification, NotificationTypes} from "../app/interfaces/notifications"

export default class ImageDataConvert extends Module <Notification, Notification> {

    constructor() {
        super()
    }

    private canvasContext = document.createElement("canvas").getContext("2d", {alpha: false})

    protected complete(): void {
    }

    protected error(e): void {
    }

    protected next(notification: ContentNotification): void {

        if (notification.images === undefined) {
            return
        }

        if (notification.images.length === 0) {
            return
        }

        this.convertImages(notification.images)

    }


    private convertImages(images: Array<HTMLImageElement>) {

        for (const image of images) {

            if (this.canConvert(image)) {
                const imageData = this.imageToImageData(image)

                this.subject.next({
                    type: NotificationTypes.ImageDataNotification,
                    inputs: [{src: image.src, data: imageData}]
                } as ImageDataNotification)
            }


        }


    }

    private canConvert(image: HTMLImageElement): boolean {
        if (image === undefined) {
            return false
        }
        if (!image.crossOrigin) {
            image.crossOrigin = ""
        }

        if (image.width <= 0 || image.height <= 0) {
            image.addEventListener("load", this.onLoad.bind(this))
            return false
        }

        return true
    }

    private onLoad(event) {
        const imgTarget = (event.target as HTMLImageElement)

        if (imgTarget.height <= 0 || imgTarget.width <= 0) {
            return
        }

        const imageData = this.imageToImageData(imgTarget)


        this.subject.next({
            type: NotificationTypes.ImageDataNotification,
            inputs: [{src: imgTarget.src, data: imageData}]
        } as ImageDataNotification)

        console.log("Loaded Image", imgTarget)

    }

    private imageToImageData(image): ImageData {
        this.canvasContext.drawImage(image, 0, 0, image.width, image.height, 0, 0, image.width, image.height)
        return this.canvasContext.getImageData(0, 0, image.width, image.width)
    }
}
