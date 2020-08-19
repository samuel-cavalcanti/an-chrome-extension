import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CnnModelsComponent} from "./cnn-models.component";

const routes: Routes = [
  {path: '', component: CnnModelsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CnnModelsRoutingModule {
}
