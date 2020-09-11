import {ContentNotification, FilterNotification, Notification, NotificationTypes} from "../app/interfaces/notifications"
import Module from "../utils/module"
import {TimeLogger} from "../utils/logger/time-logger"

export default class DocumentObserver extends Module<Notification, Notification> {

    private checkTable: { [key: string]: HTMLElement } = {}

    private errorMessages = {

        noSrc: new Error("Cannot read src, property undefined"),

        noArray: new Error("Cannot read urlImages or urlVideos, property undefined")
    }

    private logger = new TimeLogger("image_load_browser")


    private static getUrlVideo(video: HTMLVideoElement): string {
        if (video === undefined) {
            throw new Error("video is undefined")
        }

        if (video.src.substring(0, 4) === "blob" || !video.src) {
            if (video.baseURI) {
                return video.baseURI
            }
        }
        if (video.src) {
            return video.src
        }

        return ""
    }

    start() {
        this.sendAllCurrentUrlData()


        this.createObserver()
    }

    protected complete(): void {
    }

    protected error(e): void {
    }

    protected next(notification: FilterNotification): void {
        if (notification.type !== NotificationTypes.FilterNotification) {
            return
        }


        if (notification.predict === "show") {
            this.changeCss(notification.imgSrc)

        }
    }


    private sendAllCurrentUrlData() {
        const urlImages: Array<HTMLImageElement> = this.getAllCurrentImages()
        const urlVideos: Array<HTMLVideoElement> = this.getAllCurrentVideos()

        this.sendData(urlImages, urlVideos)


    }

    private getAllCurrentImages(): Array<HTMLImageElement> {
        const imagesTable: Array<HTMLImageElement> = new Array<HTMLImageElement>(document.images.length)

        for (let i = 0; i < document.images.length; i++) {
            if (document.images[i].src.length) {
                imagesTable[i] = document.images[i]
                this.checkTable[document.images[i].src] = document.images[i]

            }
        }


        return imagesTable
    }

    private getAllCurrentVideos(): Array<HTMLVideoElement> {
        const elements: any = document.getElementsByTagName("video")
        const videos: Array<HTMLVideoElement> = new Array<HTMLVideoElement>(elements.length)

        for (const element of elements) {
            const url = DocumentObserver.getUrlVideo(element)
            if (url.length) {
                this.checkTable[url] = element
                videos.push(element)
            }

        }

        return videos

    }


    private checkSrc(target: HTMLElement, url: string): boolean {
        if (this.checkTable[url] === undefined) {
            this.checkTable[url] = target
            return false
        }
        return true

    }

    private getAllNewData(mutations: MutationRecord[]): { images: Array<HTMLImageElement>, videos: Array<HTMLVideoElement> } {
        const images: Array<HTMLImageElement> = new Array<HTMLImageElement>()
        const videos: Array<HTMLVideoElement> = new Array<HTMLVideoElement>()

        for (const mutation of mutations) {
            const target: any = mutation.target

            if (target instanceof HTMLImageElement) {
                if (!this.checkSrc(target, target.src)) {
                    images.push(target)

                }
            } else if (target instanceof HTMLVideoElement) {
                const src = DocumentObserver.getUrlVideo(target)
                if (!this.checkSrc(target, src)) {
                    videos.push(target)

                }
            }

        }


        return {images, videos}
    }

    private observerImages(mutations: MutationRecord[], observer: MutationObserver) {
        const {images, videos} = this.getAllNewData(mutations)
        this.sendData(images, videos)

    }

    private createObserver() {
        const observer: MutationObserver = new MutationObserver(this.observerImages.bind(this))
        const config: MutationObserverInit = {
            childList: false,
            attributes: true,
            characterData: true,
            subtree: true,
            // attributeFilter: ["src"],
        }

        observer.observe(document.body, config)

    }


    private sendData(images: Array<HTMLImageElement>, videos: Array<HTMLVideoElement>) {

        if (images === undefined || videos === undefined) {
            throw this.errorMessages.noArray
        }

        this.sendImageUrlsNotification(images)
        // this.sendContentNotification(images, videos)

    }

    private changeCss(src: string) {

        if (src === undefined) {
            throw this.errorMessages.noSrc
        }


        if (this.checkTable[src]) { // setAttribute("style", "display: !important")
            this.checkTable[src].setAttribute("style", "display: inline !important")
        }

    }

    private sendImageUrlsNotification(images: Array<HTMLImageElement>) {

        for (const image of images) {

            if (image) {
                this.logger.updateTime(image.src)
                image.onload = () => {
                    this.logger.updateTime(image.src)
                }

                this.subject.next({type: NotificationTypes.ImageSourceNotification, message: image.src})
            }
        }

    }

    private sendContentNotification(images: Array<HTMLImageElement>, videos: Array<HTMLVideoElement>) {
        const contentNotification: ContentNotification = {
            id: "replace  this in communication",
            type: NotificationTypes.ContentNotification,
            images,
            videos
        }

        this.subject.next(contentNotification)
    }


}

