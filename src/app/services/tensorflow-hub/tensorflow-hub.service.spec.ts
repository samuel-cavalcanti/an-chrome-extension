import { TestBed } from '@angular/core/testing';

import { TensorflowHubService } from './tensorflow-hub.service';

describe('TensorflowHubService', () => {
  let service: TensorflowHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TensorflowHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
