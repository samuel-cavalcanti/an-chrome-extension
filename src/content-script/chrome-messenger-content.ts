import {Observer, Subject} from "rxjs";
import {ContentNotification, FilterNotification} from "../app/interfaces/notifications";
import Port = chrome.runtime.Port;
import ConnectInfo = chrome.runtime.ConnectInfo;
import {v4 as uuidV4} from "uuid";

export default class ChromeMessengerContent {
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

    const info: ConnectInfo = {
      name: uuidV4(),
    }
    this.port = chrome.runtime.connect(info)
    this.port.onMessage.addListener(this.listener.bind(this))

  }

  private sender(message: ContentNotification) {
    this.port.postMessage(message)
  }


  private listener(notification: FilterNotification) {
    this.subject.next(notification)

  }


}
