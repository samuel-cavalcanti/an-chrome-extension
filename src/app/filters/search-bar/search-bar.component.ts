import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  icon = faSearch

  constructor() {
  }

  @Output("search") searchEmit: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit(): void {
  }

  onChange(event: InputEvent) {
    console.log((<HTMLInputElement>event.target).value)
  }
}
