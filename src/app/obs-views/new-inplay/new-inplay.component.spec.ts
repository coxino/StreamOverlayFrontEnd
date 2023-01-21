import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInplayComponent } from './new-inplay.component';

describe('NewInplayComponent', () => {
  let component: NewInplayComponent;
  let fixture: ComponentFixture<NewInplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
