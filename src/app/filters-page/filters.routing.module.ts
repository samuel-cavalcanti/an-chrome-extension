import {RouterModule, Routes} from "@angular/router"
import {FiltersComponent} from "./filters.component"
import {NgModule} from "@angular/core"


const routes: Routes = [
  {path: "", component: FiltersComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FiltersRoutingModule{

}
