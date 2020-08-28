import DocumentObserver from "./document-observer"
import {Subject} from "rxjs"

describe("DocumentObserver", () => {

  it("should create an instance", () => {
    expect(new DocumentObserver()).toBeTruthy()
  })

  const documentObserver = new DocumentObserver()

  it("should checkTable be an object", () => {
    expect(documentObserver["checkTable"]).toBeInstanceOf(Object)
  })

  it("should create an instance of Subject", () => {
    expect(documentObserver.subject).toBeInstanceOf(Subject)
  })

  describe("Observer methods", () => {
    it("should create next function", () => {
      expect(documentObserver.observer.next !== undefined).toBeTrue()
    })

    it("should create error function", () => {
      expect(documentObserver.observer.error !== undefined).toBeTrue()
    })

    it("should create error complete", () => {
      expect(documentObserver.observer.complete !== undefined).toBeTrue()
    })
  })


  it("should getAllCurrentImages be an array", () => {
    const images = documentObserver["getAllCurrentImages"]()
    expect(images).toBeInstanceOf(Array)
  })

  it("should getAllCurrentImages be an array", () => {
    const videos = documentObserver["getAllCurrentVideos"]()
    expect(videos).toBeInstanceOf(Array)
  })


  describe("getUrlVideo", () => {

    it("should return an string", () => {
      const video = document.createElement("video")
      expect(DocumentObserver["getUrlVideo"](video)).toBeInstanceOf(String)
    })

    it("should throw Error: video is undefined", () => {
      expect(() => DocumentObserver["getUrlVideo"](undefined)).toThrowError(/video is undefined/)
    })

  })


  describe("getAllNewData", () => {
    const data = documentObserver["getAllNewData"]([])

    it("should data be Object", () => {
      expect(data).toBeInstanceOf(Object)
    })

    const urlImages = data.urlImages

    const urlVideos = data.urlVideos

    it("should urlImages be array", () => {
      expect(urlImages).toBeInstanceOf(Array)
    })

    it("should urlVideos be array", () => {
      expect(urlVideos).toBeInstanceOf(Array)
    })

  })

  it("should ChangeCss only accept string", () => {
    expect(() => documentObserver["changeCss"](undefined)).toThrowError("Cannot read src, property undefined")
  })

  it("should sendData send data ", () => {

    expect(() => documentObserver["sendData"]([], undefined)).toThrowError("Cannot read urlImages or urlVideos, property undefined")

    expect(() => documentObserver["sendData"](undefined, [])).toThrowError("Cannot read urlImages or urlVideos, property undefined")
  })

})
