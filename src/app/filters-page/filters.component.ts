import {ChangeDetectorRef, Component, OnInit} from "@angular/core"
import {BrowserUserInterfaceService} from "../services/browser-user-interface/browser-user-interface.service"
import {Observer} from "rxjs"
import {TensorFlowHubModelNotification} from "../interfaces/notifications"
import ChunkArray from "../../utils/chunk-array"

@Component({
    selector: "app-filters",
    templateUrl: "./filters.component.html",
    styleUrls: ["./filters.component.css"],
})

export class FiltersComponent implements OnInit {


    enables: Array<boolean>
    dataset: string
    classPages: Array<Array<{ name: string, enableId: number }>>
    currentPage: number
    resultSearch: Array<{ name: string, enableId: number }>
    states = {
        loading: 0,
        viewAll: 1,
        searching: 2,
    }
    state: number


    private browserObserver: Observer<TensorFlowHubModelNotification> = {
        next: this.serviceNotification.bind(this),
        error: () => {
        },
        complete: () => {
        },
    }

    private classes: Array<{ name: string, enableId: number }>

    constructor(private userInterfaceService: BrowserUserInterfaceService,
                private changeDetectorRef: ChangeDetectorRef) {

        this.state = this.states.loading
    }

    ngOnInit(): void {
        console.log("On INIT FILTERS")
        this.userInterfaceService.addCnnModelSettingsObserver(this.browserObserver)
        this.currentPage = 0
    }

    get currentState() {
        if (this.classPages === undefined) {
            return this.states.loading
        } else if (this.resultSearch) {
            return this.states.searching
        }

        return this.states.viewAll
    }


    changeEnableStatus(index: number) {

        this.userInterfaceService.changeFilterStatus(index)
        this.changeDetectorRef.detectChanges()
    }

    pageChange(page: number) {

        this.currentPage = page
        this.changeDetectorRef.detectChanges()
    }

    onSearch(query: string) {

        if (query === "") {
            this.resultSearch = undefined
        } else {
            this.resultSearch = this.classes.filter(value => value.name.indexOf(query) !== -1)
        }


        this.changeDetectorRef.detectChanges()
    }

    private serviceNotification(notification: TensorFlowHubModelNotification) {
        console.log("Filters service Notification", notification)
        this.dataset = notification.cnnModelHub.dataset
        this.classes = Object.values(notification.classNames).map((value, index) => ({name: value, enableId: index}))
        this.classNamesToChunks()


        this.enables = notification.enables
        this.changeDetectorRef.detectChanges()
    }

    private classNamesToChunks() {

        const chunkArray = new ChunkArray(this.classes)
        this.classPages = chunkArray.createChunks(10)
    }

}
