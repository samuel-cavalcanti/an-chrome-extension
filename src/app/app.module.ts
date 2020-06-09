import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { navBarComponent } from './navbar/nav-bar.component';
import { FiltersListComponent } from './filters-list/filters-list.component';
import { FilterClassComponent } from './filters-list/filter-class/filter-class.component';
import { FiltersComponent } from './filters/filters.component';
import { AddFilterComponent } from './add-filter/add-filter.component';
import {FormsModule} from "@angular/forms";
import { FilterComponent } from './filters/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    navBarComponent,
    FiltersListComponent,
    FilterClassComponent,
    FiltersComponent,
    AddFilterComponent,
    FilterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
