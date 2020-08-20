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


  currentClasses: Array<string>
  enables: Array<boolean>
  currentPage: number
  lastPage: number
  indexOfPages: Array<number>
  dataset: string
  private classPages: Array<Array<string>>

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


  }

  enableStatus(index: number): boolean {
    const enableIndex = this.getEnableIndex(index)
    return this.enables[enableIndex]

  }

  changeEnableStatus(index: number) {
    const enableIndex = this.getEnableIndex(index)
    this.enables[enableIndex] = !this.enables[enableIndex]
    this.userInterfaceService.changeFilterStatus(this.enables)
    this.changeDetectorRef.detectChanges()
  }

  goToPage(page: number) {
    console.info("On click")
    this.currentPage = page
    this.currentClasses = this.classPages[this.currentPage]
    this.nextIndexOfPages(page)
    window.scroll(0, 0)

    this.changeDetectorRef.detectChanges()
  }

  private serviceNotification(notification: TensorFlowHubModelNotification) {

    this.dataset = notification.cnnModelHub.dataset
    this.classNamesToChunks(notification.classNames)
    this.enables = notification.enables
    this.makeFirstPage()
    this.changeDetectorRef.detectChanges()
  }

  private getEnableIndex(chunkIndex: number): number {
    return this.currentPage * this.currentClasses.length + chunkIndex
  }


  private classNamesToChunks(classNames: ClassNames) {
    if (!classNames)
      return


    const classes = Object.values(classNames)
    const chunkArray = new ChunkArray(classes)
    this.classPages = chunkArray.createChunks(10)

    console.log("classPages size ", this.classPages)
    console.log(".length", this.classPages.length)

  }


  private makeFirstPage() {
    if (!this.currentPage) {
      this.currentPage = 0
      this.lastPage = this.classPages.length - 1
    }

    this.currentClasses = this.classPages[this.currentPage]

    this.nextIndexOfPages(0)
  }

  private nextIndexOfPages(nexPage: number) {
    const allIndex = [...this.classPages.keys()]
    const numberOfLinks = 3
    if (nexPage == 0)
      this.indexOfPages = allIndex.splice(nexPage, numberOfLinks)
    else if (nexPage + 1 > this.lastPage)
      this.indexOfPages = allIndex.splice(nexPage + 1 - numberOfLinks, numberOfLinks)
    else
      this.indexOfPages = allIndex.splice(nexPage - 1, numberOfLinks)

  }


}
