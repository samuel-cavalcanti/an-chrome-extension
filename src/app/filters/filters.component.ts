import {Component, OnInit} from '@angular/core';
import {EventFilter} from "../interfaces/event-filter";
import {BrowserUserInterfaceService} from "../services/browser-user-interface/browser-user-interface.service";
import {Observer} from "rxjs";
import {TensorFlowHubModelNotification} from "../interfaces/notifications";
import {ClassNames} from "../interfaces/class-names";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})

export class FiltersComponent implements OnInit {


  classes: Array<string>

  enables: Array<boolean>

  private browserObserver: Observer<TensorFlowHubModelNotification> = {
    next: (notification: TensorFlowHubModelNotification) => {
      this.classes = Object.values(notification.classNames)
      this.enables = this.classes.map(value => true)
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
    this.classNamesToArray(this.userInterfaceService.currentClassNames)

  }

  onChange(filter: EventFilter) {
    console.log(filter)
  }


  private classNamesToArray(classNames: ClassNames) {
    if (classNames)
      this.classes = Object.values(classNames)
  }


}
