import ChromeBrowserContentCommunication from "./chrome-browser-content-communication";


describe('ChromeBrowserContentCommunication', () => {

  it('should create an instance', function () {
    expect(new ChromeBrowserContentCommunication()).toBeTruthy();
  });


  const chromeMessengerContent = new ChromeBrowserContentCommunication()

  it('should throw error: try to send message when channel is not opened', function () {
    expect(() => chromeMessengerContent['sender']({
      message: 'new message',
      urlImages: []
    })).toThrowError('try to send message when channel is not opened')
  });

  describe('ChromeBrowserContentCommunication Observer methods', function () {
    it('should create next function', function () {
      expect(chromeMessengerContent.observer.next !== undefined).toBeTrue()
    })

    it('should create error function', function () {
      expect(chromeMessengerContent.observer.error !== undefined).toBeTrue()
    })

    it('should create error complete', function () {
      expect(chromeMessengerContent.observer.complete !== undefined).toBeTrue()
    })
  })


})
