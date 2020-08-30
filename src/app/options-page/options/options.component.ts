import {ChangeDetectorRef, Component, OnInit} from "@angular/core"
import {BrowserUserInterfaceService} from "../../services/browser-user-interface/browser-user-interface.service"
import {TensorFlowHubModelNotification} from "../../interfaces/notifications"

@Component({
    selector: "app-options",
    templateUrl: "./options.component.html",
    styleUrls: ["./options.component.css"]
})
export class OptionsComponent implements OnInit {

    fileName: string

    success = false

    private timeOutInMilliseconds = 3000

    constructor(private userInterfaceService: BrowserUserInterfaceService,
                private changeDetectorRef: ChangeDetectorRef) {
    }


    ngOnInit(): void {

        this.userInterfaceService.addCnnModelSettingsObserver({
            next: this.currentSettingsNotification.bind(this),
            error: () => {
            },
            complete: () => {
            }
        })

    }

    sendLocalModel(file: File) {

        const url = URL.createObjectURL(file)

        this.fileName = file.name

        this.userInterfaceService.selectLocalModel(url)
    }

    currentSettingsNotification(notification: TensorFlowHubModelNotification) {
        console.log("Options  Current Settings Notification")

        if (this.fileName === undefined) {
            return
        }
        this.fileName = undefined
        this.success = true
        setTimeout(this.removeSuccessMessage.bind(this), this.timeOutInMilliseconds)

        this.changeDetectorRef.detectChanges()


    }

    private removeSuccessMessage() {
        this.success = false

        this.changeDetectorRef.detectChanges()
    }


}
