import {Observer, Subject} from "rxjs";
import {ContentNotification, FilterNotification} from "../app/interfaces/notifications";
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

    message.message = this.port.name
    this.port.postMessage(message)
  }


  private listener(notification: FilterNotification) {
    this.subject.next(notification)

  }

  tryToCommunicate() {

    try {
      this.port.onMessage.addListener(this.listener.bind(this))
      this.port = chrome.runtime.connect({name: uuidV4()})
      console.info("port", this.port)

    } catch (e) {
      console.error(`unable to open channel from content script`)
      console.error(e)
    }


  }


}