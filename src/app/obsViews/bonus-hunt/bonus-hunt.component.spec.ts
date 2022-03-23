import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusHuntComponent } from './bonus-hunt.component';

describe('BonusHuntComponent', () => {
  let component: BonusHuntComponent;
  let fixture: ComponentFixture<BonusHuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusHuntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusHuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
