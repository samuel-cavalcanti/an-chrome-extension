import {LoadImage} from "./load-image"
import {NotificationTypes} from "../../interfaces/notifications"

describe("LoadImage", () => {
  const loadImage: LoadImage = new LoadImage()


  it("should be created", () => {
    expect(loadImage).toBeTruthy()
  })

  describe("Observer methods", () => {
    it("should create next function", () => {
      expect(loadImage.next !== undefined).toBeTrue()
    })

    it("should create error function", () => {
      expect(loadImage.error !== undefined).toBeTrue()
    })

    it("should create error complete", () => {
      expect(loadImage.complete !== undefined).toBeTrue()
    })
  })

  it("should notify image Element", () => {
    expect(loadImage.next({
      type: NotificationTypes.ImageSourceNotification,
      id: "teste",
      message: "https://blog.influu.me/wp-content/uploads/2019/05/5c6eadcca1c015297681b844.jpg",
    })).toBeUndefined()
  })

  it("should throw Tab Not found", () => {
    expect(() => loadImage.next({
      type: NotificationTypes.ImageSourceNotification,
      id: undefined,
      message: "https://blog.influu.me/wp-content/uploads/2019/05/5c6eadcca1c015297681b844.jpg"
    })).toThrowError("Tab Not found")
  })

})
