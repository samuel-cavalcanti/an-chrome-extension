import {Component, OnInit} from '@angular/core';
import {EventFilter} from "../interfaces/event-filter";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {


  enable: boolean = false

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(filter: EventFilter) {
    console.log(filter)
  }

}
