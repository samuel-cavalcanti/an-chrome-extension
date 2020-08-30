import {BrowserCommunication} from "../browser-communication"
import {Notification} from "../../../interfaces/notifications"

export const USER_INTERFACE_COMMUNICATION_ID = "UserInterfaceCommunication"

export abstract class UserInterfaceCommunication<I, O> extends BrowserCommunication<I, O> {


    abstract sendNotification(notification: Notification): void

    abstract getCnnModelSettingsFromBackground(): void

}
