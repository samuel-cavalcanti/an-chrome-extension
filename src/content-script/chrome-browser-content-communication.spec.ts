import ChromeBrowserContentCommunication from "./chrome-browser-content-communication"
import {NotificationTypes} from "../app/interfaces/notifications"


describe("ChromeBrowserContentCommunication", () => {

  it("should create an instance", () => {
    expect(new ChromeBrowserContentCommunication()).toBeTruthy()
  })


  const chromeMessengerContent = new ChromeBrowserContentCommunication()

  it("should throw error: try to send message when channel is not opened", () => {
    expect(() => chromeMessengerContent["sender"]({
      type: NotificationTypes.ContentNotification,
      message: "new message",
      urlImages: []
    })).toThrowError("try to send message when channel is not opened")
  })

  describe("ChromeBrowserContentCommunication Observer methods", () => {
    it("should create next function", () => {
      expect(chromeMessengerContent.observer.next !== undefined).toBeTrue()
    })

    it("should create error function", () => {
      expect(chromeMessengerContent.observer.error !== undefined).toBeTrue()
    })

    it("should create error complete", () => {
      expect(chromeMessengerContent.observer.complete !== undefined).toBeTrue()
    })
  })


})
