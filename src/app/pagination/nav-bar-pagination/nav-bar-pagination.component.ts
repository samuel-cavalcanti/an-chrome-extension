import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar-pagination',
  templateUrl: './nav-bar-pagination.component.html',
  styleUrls: ['./nav-bar-pagination.component.css']
})
export class NavBarPaginationComponent implements OnInit {


  firstPage: number = 0

  previousPage: number

  currentPage: number

  nextPage: number

  lastPage: number

  indexOfPages: Array<number>

  private allIndex: Array<number>


  constructor() {
  }


  @Input("numberOfPages") set numberOfPages(length: number) {
    this.lastPage = length - 1
    this.allIndex = [...Array(length).keys()]
  }

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>()

  ngOnInit(): void {
    console.info("ngOnInit", this.currentPage)
    this.currentPage = this.firstPage
    this.previousPage = this.currentPage - 1
    this.nextPage = this.currentPage + 1
    this.nextIndexOfPages()
  }

  goToPage(page: number) {
    console.info("On click", page)
    this.currentPage = page
    this.nextIndexOfPages()
    window.scroll(0, 0)
    this.pageChange.emit(page)
  }

  private nextIndexOfPages() {
    const allIndex = [...this.allIndex]
    this.nextPage = this.currentPage + 1

    this.previousPage = this.currentPage - 1

    const numberOfLinks = 5
    const lastIndex = numberOfLinks - 1
    const step = this.currentPage % lastIndex

    if (step == 0)
      this.indexOfPages = allIndex.splice(this.currentPage, numberOfLinks)
    else
      this.indexOfPages = allIndex.splice(this.currentPage - step, numberOfLinks)
  }


}
