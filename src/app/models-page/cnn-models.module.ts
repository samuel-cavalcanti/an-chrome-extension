import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"

import {CnnModelsRoutingModule} from "./cnn-models-routing.module"
import {CnnModelsComponent} from "./cnn-models.component"
import {HttpClientModule} from "@angular/common/http"
import {TensorflowHubService} from "../services/tensorflow-hub/tensorflow-hub.service"
import {CardCnnModelComponent} from "./card-cnn-model/card-cnn-model.component"
import {SpinnerModule} from "../spinner/spinner.module"
import {PaginationModule} from "../pagination/pagination.module"


@NgModule({
    declarations: [CnnModelsComponent, CardCnnModelComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        SpinnerModule,
        CnnModelsRoutingModule,
        PaginationModule
    ],
    exports: [CnnModelsComponent],
    providers: [TensorflowHubService]
})

export class CnnModelsModule {
}
