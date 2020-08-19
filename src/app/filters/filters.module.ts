import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FiltersComponent} from "./filters.component";
import {FilterComponent} from "./filter/filter.component";
import {FormsModule} from "@angular/forms";
import {FiltersRoutingModule} from "./filters.routing.module";
import {BrowserUserInterfaceService} from "../services/browser-user-interface/browser-user-interface.service";



@NgModule({
  declarations: [
    FiltersComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FiltersRoutingModule,
  ],
  exports:[
    FiltersComponent
  ],
  providers:[BrowserUserInterfaceService]

})
export class FiltersModule { }
