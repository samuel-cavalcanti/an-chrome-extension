import {ChromeBackgroundCommunication} from "./chrome-background-communication"
import {BrowserCommunication} from "../../../../utils/browser-communication"
import {Notification} from "../../../interfaces/notifications"


describe("ChromeBackgroundCommunication", () => {
  it("should create an instance", () => {
    expect(new ChromeBackgroundCommunication()).toBeTruthy()
  })

  const service = new ChromeBackgroundCommunication()


  it("should throw Error UUID undefined", () => {
    expect(() => service["notifyImages"]({} as Notification, undefined)).toThrowError("UUID undefined")
  })

  // it('should throw Error urlImages undefined', function () {
  //   expect(() => service['notifyImages'](undefined, "1")).toThrowError('URLS undefined')
  // });

  it("should throw Error because in test the application not have permissions", () => {
    expect(() => BrowserCommunication["checkPermissions"]()).toThrowError("Must enable Chrome Content Scripts")
  })


})
