import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigainnerComponent } from './ligainner.component';

describe('LigainnerComponent', () => {
  let component: LigainnerComponent;
  let fixture: ComponentFixture<LigainnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigainnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigainnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
