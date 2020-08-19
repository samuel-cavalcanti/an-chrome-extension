import {BrowserCommunication} from './browser-communication';
import {ChromeUserInterfaceCommunication} from "./chrome-browser/user-interface-communication/chrome-user-interface-communication";
import {ChromeBackgroundCommunication} from "./chrome-browser/background-communication/chrome-background-communication";

describe('BrowserCommunication', () => {

  it('should return ChromeUserInterfaceCommunication ', function () {
    expect(BrowserCommunication.selectBrowserUserInterfaceCommunication()).toBeInstanceOf(ChromeUserInterfaceCommunication)

  });

  it('should return  ChromeContentScriptCommunication', function () {
    expect(BrowserCommunication.selectBrowserBackgroundCommunication()).toBeInstanceOf(ChromeBackgroundCommunication)
  });

});
