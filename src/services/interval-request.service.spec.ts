import { TestBed } from '@angular/core/testing';

import { IntervalRequestService } from './interval-request.service';

describe('IntervalRequestService', () => {
  let service: IntervalRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntervalRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
