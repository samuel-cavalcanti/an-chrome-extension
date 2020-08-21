import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BrowserUserInterfaceService} from "../services/browser-user-interface/browser-user-interface.service";
import {Observer} from "rxjs";
import {TensorFlowHubModelNotification} from "../interfaces/notifications";
import {ClassNames} from "../interfaces/class-names";
import ChunkArray from "../../classes/ChunkArray";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})

export class FiltersComponent implements OnInit {


  enables: Array<boolean>
  dataset: string
  classPages: Array<Array<{ name: string, enableId: number }>>
  currentPage: number
  resultSearch: Array<{ name: string, enableId: number }>

  private browserObserver: Observer<TensorFlowHubModelNotification> = {
    next: this.serviceNotification.bind(this),
    error: () => {
    },
    complete: () => {
    },
  }

  constructor(private userInterfaceService: BrowserUserInterfaceService,
              private changeDetectorRef: ChangeDetectorRef) {


  }

  ngOnInit(): void {
    console.log("On INIT FILTERS")
    this.userInterfaceService.addCnnModelSettingsObserver(this.browserObserver)
    this.currentPage = 0
  }


  changeEnableStatus(index: number) {
    console.log("change Enable Status", index)
    this.enables[index] = !this.enables[index]
    this.userInterfaceService.changeFilterStatus(this.enables)
    this.changeDetectorRef.detectChanges()
  }

  pageChange(page: number) {
    console.info("pageChange", page)
    this.currentPage = page
    this.changeDetectorRef.detectChanges()
  }

  onSearch(query: string) {

    if (query === "") {
      this.resultSearch = undefined
    } else {
      const allClasses = this.classPages.reduce(((previousValue, currentValue) => [...previousValue, ...currentValue]))
      this.resultSearch = allClasses.filter(value => value.name.indexOf(query) != -1)
    }


    this.changeDetectorRef.detectChanges()
  }

  private serviceNotification(notification: TensorFlowHubModelNotification) {
    this.dataset = notification.cnnModelHub.dataset

    this.classNamesToChunks(notification.classNames)

    this.enables = notification.enables
    this.changeDetectorRef.detectChanges()
  }


  private classNamesToChunks(classNames: ClassNames) {
    if (!classNames)
      return


    const classes = Object.values(classNames)
    const chunkArray = new ChunkArray(classes.map((value, index) => ({name: value, enableId: index})))
    this.classPages = chunkArray.createChunks(10)

  }


}
