import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryBonusHuntsComponent } from './history-bonus-hunts.component';

describe('HistoryBonusHuntsComponent', () => {
  let component: HistoryBonusHuntsComponent;
  let fixture: ComponentFixture<HistoryBonusHuntsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryBonusHuntsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryBonusHuntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
