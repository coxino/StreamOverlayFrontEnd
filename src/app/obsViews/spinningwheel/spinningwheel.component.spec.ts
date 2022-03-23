import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinningwheelComponent } from './spinningwheel.component';

describe('SpinningwheelComponent', () => {
  let component: SpinningwheelComponent;
  let fixture: ComponentFixture<SpinningwheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinningwheelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinningwheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
