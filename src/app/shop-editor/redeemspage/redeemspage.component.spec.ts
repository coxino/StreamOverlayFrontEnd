import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemspageComponent } from './redeemspage.component';

describe('RedeemspageComponent', () => {
  let component: RedeemspageComponent;
  let fixture: ComponentFixture<RedeemspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeemspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
