import { TestBed } from '@angular/core/testing';

import { StreamerpagerequestsService } from './streamerpagerequests.service';

describe('StreamerpagerequestsService', () => {
  let service: StreamerpagerequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreamerpagerequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
