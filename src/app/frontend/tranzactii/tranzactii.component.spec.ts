import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranzactiiComponent } from './tranzactii.component';

describe('TranzactiiComponent', () => {
  let component: TranzactiiComponent;
  let fixture: ComponentFixture<TranzactiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranzactiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranzactiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
