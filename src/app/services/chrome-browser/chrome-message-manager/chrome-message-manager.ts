import Module from "../../../../classes/module";
import {ContentNotification, FilterNotification, Notification} from "../../../interfaces/notifications";
import {ChromeMessenger} from "../chrome-messenger/chrome-messenger";
import Port = chrome.runtime.Port;

export class ChromeMessageManager extends Module<ContentNotification, FilterNotification> {
  private messengers: Array<ChromeMessenger>


  complete(): void {
  }

  error(e): void {
  }

  next(notification: ContentNotification): void {

    this.subject.next()
  }


  add(port: Port) {
    const chromeMessenger = new ChromeMessenger()

    this.subscribe(chromeMessenger)
    chromeMessenger.subscribe(this)

    chromeMessenger.start(port)
  }


}
