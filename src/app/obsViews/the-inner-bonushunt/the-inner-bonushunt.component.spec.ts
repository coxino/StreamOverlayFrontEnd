import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheInnerBonushuntComponent } from './the-inner-bonushunt.component';

describe('TheInnerBonushuntComponent', () => {
  let component: TheInnerBonushuntComponent;
  let fixture: ComponentFixture<TheInnerBonushuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheInnerBonushuntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheInnerBonushuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
