import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EventFilter} from "../../interfaces/event-filter";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() enable: boolean = false
  @Input('className') class: string
  @Output() boxChange: EventEmitter<EventFilter> = new EventEmitter<EventFilter>()

  constructor() { }

  ngOnInit(): void {
  }

}
