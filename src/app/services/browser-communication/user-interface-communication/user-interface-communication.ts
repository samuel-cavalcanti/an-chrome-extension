import {BrowserCommunication} from "../browser-communication";

export abstract class UserInterfaceCommunication<I, O> extends BrowserCommunication<I, O> {

  protected id = "popup"

  abstract changeCnnModelSettings(setting: any): void

  abstract getCnnModelSettingsFromBackground(): void

}
