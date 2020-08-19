import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CnnModelsRoutingModule} from './cnn-models-routing.module';
import {CnnModelsComponent} from "./cnn-models.component";
import {HttpClientModule} from "@angular/common/http";
import {TensorflowHubService} from "../services/tensorflow-hub/tensorflow-hub.service";
import { CardCnnModelComponent } from './card-cnn-model/card-cnn-model.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [CnnModelsComponent, CardCnnModelComponent, SpinnerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CnnModelsRoutingModule
  ],
  exports: [CnnModelsComponent],
  providers: [TensorflowHubService]
})

export class CnnModelsModule {
}
