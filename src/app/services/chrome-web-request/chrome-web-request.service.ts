import {Injectable} from '@angular/core';
import {Observer, Subject} from "rxjs";
import {ContentNotification, FilterNotification, Notification} from "../../interfaces/notifications";
import WebRequestBodyDetails = chrome.webRequest.WebRequestBodyDetails;
import RequestFilter = chrome.webRequest.RequestFilter;
import tabId = chrome.devtools.inspectedWindow.tabId;

@Injectable({
  providedIn: 'root'
})
export class ChromeWebRequestService {

  subject = new Subject<Notification>()

  observer: Observer<FilterNotification> = {
    next: ChromeWebRequestService.next.bind(this),
    error: () => {
    },
    complete: () => {
    }
  }

  total = 0

  constructor() {

    const filter: RequestFilter = {
      types: ['image'],
      urls: ['<all_urls>']
    }

    chrome.webRequest.onCompleted.addListener(this.beforeRequest.bind(this), filter)
  }


  private static next(notification: FilterNotification) {

    console.log("Next chrome", notification)
    chrome.tabs.sendMessage(parseInt(notification.id), notification)

  }

  private beforeRequest(details: WebRequestBodyDetails) {
    this.total++
    console.log(this.total)
    // console.log("before Request-> details:", details)
    // this.subject.next({id: details.tabId, message: details.url})
  }

}

