import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BackgroundComponent} from './background/background.component';
import {navBarComponent} from './navbar/nav-bar.component';

import {BrowserUserInterfaceService} from "./services/browser-user-interface/browser-user-interface.service";


@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    navBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [BrowserUserInterfaceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
