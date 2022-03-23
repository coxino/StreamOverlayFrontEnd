import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocComponent } from './stoc.component';

describe('StocComponent', () => {
  let component: StocComponent;
  let fixture: ComponentFixture<StocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
