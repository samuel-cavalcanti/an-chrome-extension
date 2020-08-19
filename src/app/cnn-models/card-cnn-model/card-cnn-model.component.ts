import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TensorflowHubModel} from "../../interfaces/tensorflow-hub-model";

@Component({
  selector: 'app-card-cnn-model',
  templateUrl: './card-cnn-model.component.html',
  styleUrls: ['./card-cnn-model.component.css']
})
export class CardCnnModelComponent implements OnInit {

  @Input("cnn-model") model: TensorflowHubModel
  @Input("status") status: boolean
  @Output("selectModel") click: EventEmitter<TensorflowHubModel> = new EventEmitter<TensorflowHubModel>()

  constructor() {
  }

  ngOnInit(): void {
  }


}
