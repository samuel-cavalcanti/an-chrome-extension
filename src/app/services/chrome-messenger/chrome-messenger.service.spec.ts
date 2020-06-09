import { TestBed } from '@angular/core/testing';

import { ChromeMessengerService } from './chrome-messenger.service';

describe('ChromeMessengerService', () => {
  let service: ChromeMessengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChromeMessengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
