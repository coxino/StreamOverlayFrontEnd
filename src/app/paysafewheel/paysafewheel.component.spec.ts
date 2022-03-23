import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysafewheelComponent } from './paysafewheel.component';

describe('PaysafewheelComponent', () => {
  let component: PaysafewheelComponent;
  let fixture: ComponentFixture<PaysafewheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysafewheelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysafewheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
