import Module from "../module"
import {
    ContentNotification,
    FilterNotification,
    ImageDataNotification,
    ImageNotification,
    ImageUrlsNotification,
    Notification,
    NotificationTypes
} from "../../app/interfaces/notifications"

export const ENABLE_LOGGERS = true

export class TimeLogger extends Module <Notification, Notification> {


    constructor(private loggerName) {
        super()
    }

    private exportCSV = false

    private timers: { [index: string]: { timeInMilliseconds: number, isDate: boolean } } = {}

    private callbacks = {
        [NotificationTypes.ImageSourceNotification]: this.imageSourceNotification.bind(this),
        [NotificationTypes.FilterNotification]: this.filterNotification.bind(this),
        [NotificationTypes.ImageNotification]: this.imageNotification.bind(this),
        [NotificationTypes.ContentNotification]: this.contentNotification.bind(this),
        [NotificationTypes.ImageDataNotification]: this.imageDataNotification.bind(this),
        [NotificationTypes.ImageUrlsNotification]: this.imageUrlsNotification.bind(this)
    }

    private toCsvFile(data: string) {
        const a = document.createElement("a")
        const blob = new Blob([data], {type: "text/csv"})
        a.href = URL.createObjectURL(blob)
        a.download = `${this.loggerName}.csv`
        document.body.appendChild(a)
        a.click()
    }

    protected complete(): void {
    }

    protected error(e): void {
    }

    protected next(notification: Notification): void {

        if (this.callbacks[notification.type]) {
            this.callbacks[notification.type](notification)
        }

    }

    private imageSourceNotification(notification: Notification) {

        this.updateTime(notification.message)
    }

    private filterNotification(notification: FilterNotification) {

        this.updateTime(notification.imgSrc)
    }

    private imageNotification(notification: ImageNotification) {

        this.updateTime(notification.img.src)
    }

    private contentNotification(notification: ContentNotification) {
        if (notification.images === undefined) {
            return
        }
        notification.images.forEach(value => this.updateTime(value.src))

    }

    private imageDataNotification(notification: ImageDataNotification) {
        if (notification.inputs === undefined) {
            return
        }
        notification.inputs.forEach(value => this.updateTime(value.src))

    }

    private imageUrlsNotification(notification: ImageUrlsNotification) {
        notification.imageUrls.forEach(this.updateTime.bind(this))
    }


    updateTime(index: string) {
        const currentTimeInMilliseconds = new Date().getTime()

        if (this.timers[index]) {
            this.timers[index].timeInMilliseconds = currentTimeInMilliseconds - this.timers[index].timeInMilliseconds
            this.timers[index].isDate = false
        } else {
            this.timers[index] = {timeInMilliseconds: currentTimeInMilliseconds, isDate: true}
        }

        this.toCsvColumn()

    }

    private toCsvColumn() {
        const loggedTimes = Object.values(this.timers).filter(value => value.isDate === false)

        if (loggedTimes.length < 600) {
            console.log(`${this.loggerName} loggedTimes ${loggedTimes.length}`)
            return
        }

        if (this.exportCSV) {
            return
        }

        let csv = `${this.loggerName}\n`

        for (const timer of loggedTimes) {
            csv += `${timer.timeInMilliseconds}\n`
        }

        this.toCsvFile(csv)

        this.exportCSV = true
    }

}
