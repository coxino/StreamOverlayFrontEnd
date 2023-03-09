import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsviewerComponent } from './obsviewer.component';

describe('ObsviewerComponent', () => {
  let component: ObsviewerComponent;
  let fixture: ComponentFixture<ObsviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
