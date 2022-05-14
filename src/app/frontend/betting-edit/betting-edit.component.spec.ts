import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingEditComponent } from './betting-edit.component';

describe('BettingEditComponent', () => {
  let component: BettingEditComponent;
  let fixture: ComponentFixture<BettingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BettingEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
