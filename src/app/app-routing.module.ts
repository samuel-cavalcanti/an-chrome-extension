import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import {BackgroundComponent} from "./background-page/background.component"


const routes: Routes = [
    {path: "filters", loadChildren: () => import("./filters-page/filters.module").then(m => m.FiltersModule)},
    {path: "models", loadChildren: () => import("./models-page/cnn-models.module").then(m => m.CnnModelsModule)},
    {path: "options", loadChildren: () => import("./options-page/options-page.module").then(m => m.OptionsPageModule)},
    {path: "background", component: BackgroundComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})], // <-- uso de hash habilitado
    exports: [RouterModule]
})
export class AppRoutingModule {
}
