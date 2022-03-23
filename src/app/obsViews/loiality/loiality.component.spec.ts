import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoialityComponent } from './loiality.component';

describe('LoialityComponent', () => {
  let component: LoialityComponent;
  let fixture: ComponentFixture<LoialityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoialityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
