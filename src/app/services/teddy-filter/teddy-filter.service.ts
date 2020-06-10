import {Injectable} from '@angular/core';
import {ModelService} from "../model/model.service";

import {LoadImageService} from "../load-image/load-image.service";
import {ChromeMessengerService} from "../chrome-messenger/chrome-messenger.service";
import Port = chrome.runtime.Port;

@Injectable({
  providedIn: 'root'
})
export class TeddyFilterService {


  constructor(private model: ModelService,
              private loadImage: LoadImageService) {


    model.subscribe(loadImage)
    
    chrome.runtime.onConnect.addListener((port: Port) => {

      const chromeMessenger = new ChromeMessengerService(port)

      loadImage.subscribe(chromeMessenger)

      chromeMessenger.subscribe(model)
    })



  }


}
