import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BackgroundComponent} from "./background/background.component";


const routes: Routes = [
  {path: 'filters', loadChildren: () => import("./filters/filters.module").then(m => m.FiltersModule)},
  {path: 'models', loadChildren: () => import("./cnn-models/cnn-models.module").then(m => m.CnnModelsModule)},
  {path: 'background', component: BackgroundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
