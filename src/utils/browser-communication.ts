import Module from "./module"


export abstract class BrowserCommunication<I, O> extends Module<I, O> {

  abstract tryToStart(): void

  abstract checkPermissions(): void


}

