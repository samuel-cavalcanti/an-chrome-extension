import {ChromeWebRequestService} from './chrome-web-request.service';

describe('ChromeWebRequestService', () => {


  it('should be throw error on created', () => {
    expect(() => new ChromeWebRequestService()).toThrowError(`you must declare the "webRequest" permission in the extension manifest`);
  });
});
