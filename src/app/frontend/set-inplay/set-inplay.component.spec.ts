import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInplayComponent } from './set-inplay.component';

describe('SetInplayComponent', () => {
  let component: SetInplayComponent;
  let fixture: ComponentFixture<SetInplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetInplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetInplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
