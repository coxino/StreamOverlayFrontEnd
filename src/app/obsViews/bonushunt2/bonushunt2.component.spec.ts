import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bonushunt2Component } from './bonushunt2.component';

describe('Bonushunt2Component', () => {
  let component: Bonushunt2Component;
  let fixture: ComponentFixture<Bonushunt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bonushunt2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bonushunt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
