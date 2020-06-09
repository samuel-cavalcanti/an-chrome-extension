import {Injectable} from '@angular/core';
import {Observer, Subject} from "rxjs";
import {FilterNotification, Notification} from "../../interfaces/notifications";

@Injectable({
  providedIn: 'root'
})
export class ChromeMessengerService {

  subject = new Subject<Notification>()

  observer: Observer<FilterNotification> = {
    next: this.next.bind(this),
    error: this.error.bind(this),
    complete: this.complete.bind(this)
  }


  constructor() {
    chrome.runtime.onMessage.addListener(this.listener.bind(this));
  }

  listener(request, sender) {

    if (request.urlImages) {
      this.notifyImages(request.urlImages, sender.tab.id);
    }

  }


  notifyImages(urlImages: Array<string>, tabID: number) {

    for (const url of urlImages)
      this.subject.next({message: url, id: tabID})

  }


  next(notification: FilterNotification) {

    console.log("Next chrome", notification)
    chrome.tabs.sendMessage(notification.id, notification)

  }

  error(notification: Notification) {

    chrome.tabs.sendMessage(notification.id, notification.message)
  }

  complete() {

  }

}

