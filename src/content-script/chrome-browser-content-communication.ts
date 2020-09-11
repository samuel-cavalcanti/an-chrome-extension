import {FilterNotification, Notification} from "../app/interfaces/notifications"
import {v4 as uuidV4} from "uuid"
import Module from "../utils/module"
import Port = chrome.runtime.Port

export default class ChromeBrowserContentCommunication extends Module <Notification, Notification> {

    private port: Port

    constructor() {
        super()
    }

    protected complete(): void {
    }

    protected error(e): void {
    }

    protected next(notification: Notification): void {
        if (this.port === undefined) {
            throw new Error("try to send message when channel is not opened")
        }



        notification.id = this.port.name
        this.port.postMessage(notification)

    }


    private listener(notification: FilterNotification) {
        this.subject.next(notification)

    }

    tryToCommunicate() {

        try {
            this.port = chrome.runtime.connect({name: uuidV4()})
            this.port.onMessage.addListener(this.listener.bind(this))

        } catch (e) {
            console.error(`unable to open channel from content script`)
            console.error(e)
        }


    }


}
