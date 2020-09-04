import {BrowserModule} from "@angular/platform-browser"
import {NgModule} from "@angular/core"

import {AppRoutingModule} from "./app-routing.module"
import {AppComponent} from "./app.component"
import {NavBarComponent} from "./navbar/nav-bar.component"

import {BrowserUserInterfaceService} from "./services/browser-user-interface/browser-user-interface.service"
import {BackgroundModule} from "./background-page/background.module"

// @ts-ignore
@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BackgroundModule,
    ],
    providers: [BrowserUserInterfaceService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
