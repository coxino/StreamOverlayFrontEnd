import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbetsComponent } from './testbets.component';

describe('TestbetsComponent', () => {
  let component: TestbetsComponent;
  let fixture: ComponentFixture<TestbetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestbetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
