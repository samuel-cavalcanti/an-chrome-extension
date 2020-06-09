import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BackgroundComponent} from "./background/background.component";
import {AppComponent} from "./app.component";
import {FiltersComponent} from "./filters/filters.component";
import {AddFilterComponent} from "./add-filter/add-filter.component";


const routes: Routes = [
  {path: 'background', component: BackgroundComponent},
  {path:'filters',component:FiltersComponent},
  {path:'add-filter',component:AddFilterComponent},
  // {path: '', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
