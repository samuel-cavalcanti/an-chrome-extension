import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"
import {NavBarPaginationComponent} from "./nav-bar-pagination/nav-bar-pagination.component"


@NgModule({
  declarations: [NavBarPaginationComponent],
  imports: [
    CommonModule
  ],
  exports: [NavBarPaginationComponent]
})
export class PaginationModule {
}
