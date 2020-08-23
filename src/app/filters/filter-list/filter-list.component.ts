import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {

  @Input() filters: Array<{ name: string, enableId: number }>

  @Input() enables: Array<boolean>

  @Output() enableChange: EventEmitter<number> = new EventEmitter<number>()

  constructor() {
  }

  ngOnInit(): void {
  }

}
