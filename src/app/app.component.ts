import {Component, OnInit} from '@angular/core';
import * as tf from '@tensorflow/tfjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Carregue um Filtro';


  constructor() {
  }

  ngOnInit(): void {

    console.log(tf.version)

  }
}
