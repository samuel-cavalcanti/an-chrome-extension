import { TestBed } from '@angular/core/testing';

import { TeddyFilterService } from './teddy-filter.service';

describe('TeddyFilterService', () => {
  let service: TeddyFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeddyFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
