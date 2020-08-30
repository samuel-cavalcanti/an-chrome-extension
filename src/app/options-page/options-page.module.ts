import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"

import {OptionsPageRoutingModule} from "./options-page-routing.module"
import {OptionsComponent} from "./options/options.component"
import {InputLocalModelComponent} from "./input-local-model/input-local-model.component"
import {SpinnerModule} from "../spinner/spinner.module"


@NgModule({
    declarations: [OptionsComponent, InputLocalModelComponent],
    imports: [
        CommonModule,
        OptionsPageRoutingModule,
        SpinnerModule
    ]
})
export class OptionsPageModule {
}
