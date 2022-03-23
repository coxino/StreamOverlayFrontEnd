import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusHuntEndComponent } from './bonus-hunt-end.component';

describe('BonusHuntEndComponent', () => {
  let component: BonusHuntEndComponent;
  let fixture: ComponentFixture<BonusHuntEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusHuntEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusHuntEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
