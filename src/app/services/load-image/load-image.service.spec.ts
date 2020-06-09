import { TestBed } from '@angular/core/testing';

import { LoadImageService } from './load-image.service';

describe('LoadImageService', () => {
  let service: LoadImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
