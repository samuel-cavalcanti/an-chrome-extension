import { TestBed } from '@angular/core/testing';

import { ChromeWebRequestService } from './chrome-web-request.service';

describe('ChromeMessengerService', () => {
  let service: ChromeWebRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChromeWebRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
