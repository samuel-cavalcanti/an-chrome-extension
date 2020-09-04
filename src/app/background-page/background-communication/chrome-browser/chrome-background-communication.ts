import {
    ClassNameUrlsNotification,
    ContentNotification,
    Notification,
    NotificationTypes,
    TensorFlowHubModelNotification
} from "../../../interfaces/notifications"
import {BrowserCommunication} from "../../../../utils/browser-communication"
import {USER_INTERFACE_COMMUNICATION_ID} from "../../../../utils/user-interface-communication"
import Port = chrome.runtime.Port

export const GET_CURRENT_SETTINGS_MESSAGE = "get current cnn settings"

export const GET_LOCAL_CLASS_NAME_URLS = " get local class name urls"

export class ChromeBackgroundCommunication extends BrowserCommunication <Notification, Notification> {

    constructor() {
        super()
        this.ports = {}

    }


    private static erros = {
        enableContentScript: new Error("Must enable Chrome Content Scripts"),
        enableStorage: new Error("Must add Storage permission"),
        uuidUndefined: new Error("UUID undefined"),
        urlsUndefined: new Error("URLS undefined")
    }

    private callbacks = {
        [NotificationTypes.Notification]: this.simpleNotifications.bind(this),
        [NotificationTypes.ContentNotification]: this.notifyImages.bind(this),
        [NotificationTypes.TensorFlowHubModelNotification]: this.notifyCnnSettings.bind(this),
        [NotificationTypes.LocalModelInputNotification]: this.loadLocalModel.bind(this)
    }

    private storeKey = "settings"

    private readonly ports: { [key: string]: Port }

    private currentUserInterfacePort: Port

    private localClassesNames = {
        ["imagenet-ilsvrc-2012-cls"]: chrome.runtime.getURL("assets/modelJS/Image-net-class.json")
    }


    checkPermissions() {
        if (chrome.runtime === undefined || chrome.runtime.getURL === undefined) {
            throw ChromeBackgroundCommunication.erros.enableContentScript
        }

        if (chrome.storage === undefined) {
            throw ChromeBackgroundCommunication.erros.enableStorage
        }
    }

    tryToStart() {
        console.log("stating browser listener ...")
        try {
            this.checkPermissions()
            chrome.runtime.onConnect.addListener(this.onConnect.bind(this))
            this.loadLocalData()
            this.sendClassNameUrls()
        } catch (e) {
            console.log("Unable to  start runtime")
            console.log(e)
        }


    }


    complete() {
    }

    error(e) {
    }

    next(notification: Notification) {

        if (this.ports[notification.id]) {
            this.ports[notification.id].postMessage(notification)
        }


        if (notification.type === NotificationTypes.TensorFlowHubModelNotification) {
            console.log("Chrome Background salvando Notificação", notification)
            this.storeSettings(notification as TensorFlowHubModelNotification)
        }

    }


    private onConnect(port: Port) {

        this.ports[port.name] = port

        port.onMessage.addListener(this.listener.bind(this))
        port.onDisconnect.addListener(this.disconnect.bind(this))

    }

    private listener(notification: Notification, port: Port) {

        if (this.callbacks[notification.type]) {
            this.callbacks[notification.type](notification, port)
        }

    }

    private disconnect(port: Port) {
        delete this.ports[port.name]
    }


    private notifyImages(notification: ContentNotification, port: Port) {

        const urlImages = notification.urlImages

        if (port === undefined) {
            throw ChromeBackgroundCommunication.erros.uuidUndefined
        }

        if (urlImages === undefined) {
            throw ChromeBackgroundCommunication.erros.urlsUndefined
        }

        for (const url of urlImages) {
            if (url) {
                this.subject.next({message: url, id: port.name, type: NotificationTypes.ImageSourceNotification} as Notification)
            }
        }

    }

    private notifyCnnSettings(notification: TensorFlowHubModelNotification, port: Port) {

        notification.id = port.name


        this.subject.next(notification)
    }


    private loadLocalData() {
        chrome.storage.local.get([this.storeKey], this.callbackStorage.bind(this))
    }

    private callbackStorage(result: any) {

        const notification: TensorFlowHubModelNotification = {
            ...result.settings,
            type: NotificationTypes.TensorFlowHubModelNotification,
            id: USER_INTERFACE_COMMUNICATION_ID
        }

        if (result.settings) {
            this.subject.next(notification)
            this.next(notification)
        } else if (this.currentUserInterfacePort) {
            this.next({
                id: this.currentUserInterfacePort.name,
                cnnModelHub: {},
                classNames: {},
                type: NotificationTypes.TensorFlowHubModelNotification
            } as TensorFlowHubModelNotification)
        }


    }

    private storeSettings(settings: TensorFlowHubModelNotification) {
        chrome.storage.local.set({[this.storeKey]: settings})
    }


    private simpleNotifications(notification: Notification, port: Port) {
        if (notification.message === GET_CURRENT_SETTINGS_MESSAGE) {
            this.currentUserInterfacePort = port
            this.loadLocalData()
        } else if (notification.message === GET_LOCAL_CLASS_NAME_URLS) {
            this.sendClassNameUrls()
        }


    }

    private sendClassNameUrls() {
        this.subject.next({
            type: NotificationTypes.ClassNameUrlsNotification,
            urls: this.localClassesNames
        } as ClassNameUrlsNotification)
    }


    private loadLocalModel(notification: Notification, port: Port) {

        this.subject.next(notification)
    }


}
