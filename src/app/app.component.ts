import {Component, OnInit} from '@angular/core';
import {BrowserUserInterfaceService} from "./services/browser-user-interface/browser-user-interface.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'teddy-extension';


  constructor() {
  }

  ngOnInit(): void {


  }
}
