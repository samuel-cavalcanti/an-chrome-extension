import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EventFilter} from "../../interfaces/event-filter";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() enable: boolean = false

  @Input('className') set className(name: string) {
    console.info("name: ", name)
    this.class = name.replace(/[^\w\s]/gi, "")
    this.name = name
  }

  @Output() boxChange: EventEmitter<EventFilter> = new EventEmitter<EventFilter>()

  class: string

  name: string

  constructor() {
  }

  ngOnInit(): void {

  }

}
