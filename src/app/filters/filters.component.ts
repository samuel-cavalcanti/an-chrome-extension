import {Component, OnInit} from '@angular/core';
import {EventFilter} from "../interfaces/event-filter";
import {ClassNames} from "../interfaces/class-names";
import {BrowserUserInterfaceService} from "../services/browser-user-interface/browser-user-interface.service";
import {Observer} from "rxjs";
import {TensorFlowHubModelNotification} from "../interfaces/notifications";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {


  classNames: ClassNames

  enables: { [key: string]: boolean }

  private browserObserver: Observer<TensorFlowHubModelNotification> = {
    next: (notification: TensorFlowHubModelNotification) => {
      this.classNames = notification.classNames
    },
    error: () => {
    },
    complete: () => {
    },
  }

  constructor(private userInterfaceService: BrowserUserInterfaceService) {

  }

  ngOnInit(): void {

    this.userInterfaceService.notifyCurrentSettings(this.browserObserver)
    this.classNames = this.userInterfaceService.currentClassNames
  }

  onChange(filter: EventFilter) {
    console.log(filter)
  }

}
