import { TestBed } from '@angular/core/testing';

import { GameHolderService } from './game-holder.service';

describe('GameHolderService', () => {
  let service: GameHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
