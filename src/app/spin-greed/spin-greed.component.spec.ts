import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinGreedComponent } from './spin-greed.component';

describe('SpinGreedComponent', () => {
  let component: SpinGreedComponent;
  let fixture: ComponentFixture<SpinGreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinGreedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinGreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
