import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBackgroundComponent } from './basic-background.component';

describe('BasicBackgroundComponent', () => {
  let component: BasicBackgroundComponent;
  let fixture: ComponentFixture<BasicBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
