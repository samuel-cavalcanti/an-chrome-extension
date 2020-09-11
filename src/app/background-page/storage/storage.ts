import Module from "../../../utils/module"
import {Notification, TensorFlowHubModelNotification} from "../../interfaces/notifications"
import {SharedPreferences} from "../shared-preferences/shared-preferences-interface"
import {ChromeSharedPreferences} from "../shared-preferences/chrome/chrome-shared-preferences"
import {TensorflowHubModel} from "../../interfaces/tensorflow-hub-model"
import {ClassNames} from "../../interfaces/class-names"

interface Settings {
    cnnModel: TensorflowHubModel
    classNames: ClassNames
}

export class Storage extends Module<Notification, Notification> {

    private sharedPreferences: SharedPreferences

    private readonly storeKey: string = "settings"

    private currentSettings: TensorFlowHubModelNotification

    constructor() {
        super()
        this.selectSharedPreferences()
    }

    private selectSharedPreferences() {
        if (chrome) {
            this.sharedPreferences = new ChromeSharedPreferences()
        } else {
            throw Error("Not implemented sharedPreferences for another browsers")
        }
    }

    protected complete(): void {
    }

    protected error(e): void {
    }

    protected next(notification: Notification): void {
    }

}
