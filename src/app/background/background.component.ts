import {Component, OnInit} from '@angular/core';
import {TeddyFilterService} from "../services/teddy-filter/teddy-filter.service";

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  constructor(teddyFilter: TeddyFilterService) {


  }


  ngOnInit(): void {
  }

}
