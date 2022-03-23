import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingbhComponent } from './bettingbh.component';

describe('BettingbhComponent', () => {
  let component: BettingbhComponent;
  let fixture: ComponentFixture<BettingbhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BettingbhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingbhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
