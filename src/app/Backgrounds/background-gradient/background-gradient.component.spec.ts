import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundGradientComponent } from './background-gradient.component';

describe('BackgroundGradientComponent', () => {
  let component: BackgroundGradientComponent;
  let fixture: ComponentFixture<BackgroundGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundGradientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
