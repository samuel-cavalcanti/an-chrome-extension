import DocumentObserver from "./document-observer";
import {Subject} from "rxjs";

describe('DocumentObserver', function () {

  it('should create an instance', function () {
    expect(new DocumentObserver()).toBeTruthy();
  });

  const documentObserver = new DocumentObserver()

  it('should checkTable be an object', function () {
    expect(documentObserver["checkTable"]).toBeInstanceOf(Object)
  })

  it('should create an instance of Subject', function () {
    expect(documentObserver.subject).toBeInstanceOf(Subject)
  })

  describe('Observer methods', function () {
    it('should create next function', function () {
      expect(documentObserver.observer.next !== undefined).toBeTrue()
    })

    it('should create error function', function () {
      expect(documentObserver.observer.error !== undefined).toBeTrue()
    })

    it('should create error complete', function () {
      expect(documentObserver.observer.complete !== undefined).toBeTrue()
    })
  })


  it('should getAllCurrentImages be an array', function () {
    const images = documentObserver["getAllCurrentImages"]()
    expect(images).toBeInstanceOf(Array)
  })

  it('should getAllCurrentImages be an array', function () {
    const videos = documentObserver["getAllCurrentVideos"]()
    expect(videos).toBeInstanceOf(Array)
  })


  describe('getUrlVideo', function () {

    it('should return an string', () => {
      const video = document.createElement('video')
      expect(DocumentObserver["getUrlVideo"](video)).toBeInstanceOf(String)
    })

    it('should throw Error: video is undefined', function () {
      expect(()=>DocumentObserver["getUrlVideo"](undefined)).toThrowError(/video is undefined/)
    })

  })


  describe('getAllNewData', function () {
    const data = documentObserver["getAllNewData"]([])

    it('should data be Object', function () {
      expect(data).toBeInstanceOf(Object)
    });

    const urlImages = data.urlImages

    const urlVideos = data.urlVideos

    it('should urlImages be array', function () {
      expect(urlImages).toBeInstanceOf(Array)
    });

    it('should urlVideos be array', function () {
      expect(urlVideos).toBeInstanceOf(Array)
    });

  });

  it('should ChangeCss only accept string', function () {
    expect(()=>documentObserver["changeCss"](undefined)).toThrowError('Cannot read src, property undefined')
  });

  it('should sendData send data ', function () {

    expect(() => documentObserver["sendData"]([], undefined)).toThrowError('Cannot read urlImages or urlVideos, property undefined')

    expect(() => documentObserver["sendData"](undefined, [])).toThrowError('Cannot read urlImages or urlVideos, property undefined')
  });

})
