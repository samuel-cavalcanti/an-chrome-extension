import {ChromeBrowserCommunication} from './chrome-browser.communication';

describe('ChromeBrowserCommunication', () => {
  let service: ChromeBrowserCommunication;

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should modelURL be string', function () {
    expect(service.modelURL).toBeInstanceOf(String)
  });

  it('should classesURL be string', function () {
    expect(service.classesNameURL).toBeInstanceOf(String)
  });

  it('should throw Error UUID undefined',function(){
      expect(()=>service['notifyImages']([],undefined)).toThrowError('UUID is undefined')
   })


});
