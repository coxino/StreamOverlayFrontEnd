import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsViewMainComponent } from './obs-view-main.component';

describe('ObsViewMainComponent', () => {
  let component: ObsViewMainComponent;
  let fixture: ComponentFixture<ObsViewMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsViewMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsViewMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
