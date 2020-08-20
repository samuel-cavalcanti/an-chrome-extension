import {Observer, Subject} from "rxjs";
import {ContentNotification, FilterNotification, NotificationTypes} from "../app/interfaces/notifications";
import {v4 as uuidV4} from "uuid";
import Port = chrome.runtime.Port;

export default class ChromeBrowserContentCommunication {
  subject = new Subject<FilterNotification>()

  observer: Observer<ContentNotification> = {
    next: this.sender.bind(this),
    error: () => {
    },
    complete: () => {
    }
  }

  private port: Port

  constructor() {
    this.port = undefined
  }

  private sender(message: ContentNotification) {
    if (this.port == undefined)
      throw new Error('try to send message when channel is not opened')

    message.type = NotificationTypes.ContentNotification
    message.id = this.port.name
    this.port.postMessage(message)
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
