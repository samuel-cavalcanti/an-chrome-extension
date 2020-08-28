import {BrowserCommunication} from "../browser-communication"

export abstract class UserInterfaceCommunication<I, O> extends BrowserCommunication<I, O> {

  protected id = "popup"

  abstract setCnnModelSettings(setting: any): void

  abstract getCnnModelSettingsFromBackground(): void

}
