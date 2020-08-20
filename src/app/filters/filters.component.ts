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
  classPages: Array<Array<string>>
  currentPage: number

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

  enableStatus(index: number): boolean {
    const enableIndex = this.getEnableIndex(index)
    return this.enables[enableIndex]

  }

  changeEnableStatus(index: number) {
    console.log("change Enable Status", index)
    const enableIndex = this.getEnableIndex(index)
    this.enables[enableIndex] = !this.enables[enableIndex]
    this.userInterfaceService.changeFilterStatus(this.enables)
    this.changeDetectorRef.detectChanges()
  }

  pageChange(page: number) {
    console.info("pageChange", page)
    this.currentPage = page
    this.changeDetectorRef.detectChanges()
  }

  private serviceNotification(notification: TensorFlowHubModelNotification) {
    this.dataset = notification.cnnModelHub.dataset

    this.classNamesToChunks(notification.classNames)
    this.enables = notification.enables
    this.changeDetectorRef.detectChanges()
  }

  private getEnableIndex(chunkIndex: number): number {
    return this.currentPage * this.classPages[this.currentPage].length + chunkIndex
  }


  private classNamesToChunks(classNames: ClassNames) {
    if (!classNames)
      return


    const classes = Object.values(classNames)
    const chunkArray = new ChunkArray(classes)
    this.classPages = chunkArray.createChunks(10)


  }


}
