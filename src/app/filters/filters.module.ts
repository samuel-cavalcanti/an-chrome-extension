import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"
import {FiltersComponent} from "./filters.component"
import {FilterComponent} from "./filter/filter.component"
import {FormsModule} from "@angular/forms"
import {FiltersRoutingModule} from "./filters.routing.module"
import {SpinnerModule} from "../spinner/spinner.module"
import {PaginationModule} from "../pagination/pagination.module"
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome"
import {SearchBarComponent} from "./search-bar/search-bar.component"
import { FilterListComponent } from "./filter-list/filter-list.component"


@NgModule({
  declarations: [
    FiltersComponent,
    FilterComponent,
    SearchBarComponent,
    FilterListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FiltersRoutingModule,
    SpinnerModule,
    PaginationModule,
    FontAwesomeModule,
  ],
  exports: [
    FiltersComponent
  ],


})
export class FiltersModule {
}
