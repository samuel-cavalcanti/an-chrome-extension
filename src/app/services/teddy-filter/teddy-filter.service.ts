import {Injectable} from '@angular/core';
import {ModelService} from "../model/model.service";

import {LoadImageService} from "../load-image/load-image.service";
import {ChromeMessengerService} from "../chrome-messenger/chrome-messenger.service";

@Injectable({
  providedIn: 'root'
})
export class TeddyFilterService {


  constructor(private model: ModelService,
              private loadImage: LoadImageService,
              private chromeMessenger: ChromeMessengerService) {


    chromeMessenger.subject.subscribe(loadImage.observer)
    loadImage.subject.subscribe(model.observer)
    model.subject.subscribe(chromeMessenger.observer)


  }


}
