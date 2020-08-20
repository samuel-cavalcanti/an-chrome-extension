import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input("enable") enable: boolean

  @Input("className") className: string

  @Input("index") index: number

  @Output() enableChange: EventEmitter<number> = new EventEmitter<number>()


  constructor() {
  }

  ngOnInit(): void {

  }

  onClick() {
    this.enable = !this.enable
    this.enableChange.emit(this.index)
  }

}
