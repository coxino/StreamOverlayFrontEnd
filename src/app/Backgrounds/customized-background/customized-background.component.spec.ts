import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedBackgroundComponent } from './customized-background.component';

describe('CustomizedBackgroundComponent', () => {
  let component: CustomizedBackgroundComponent;
  let fixture: ComponentFixture<CustomizedBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizedBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
