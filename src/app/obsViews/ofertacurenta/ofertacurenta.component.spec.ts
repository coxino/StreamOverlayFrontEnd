import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertacurentaComponent } from './ofertacurenta.component';

describe('OfertacurentaComponent', () => {
  let component: OfertacurentaComponent;
  let fixture: ComponentFixture<OfertacurentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertacurentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertacurentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
