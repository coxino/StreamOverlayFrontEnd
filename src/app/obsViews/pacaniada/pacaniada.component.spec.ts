import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacaniadaComponent } from './pacaniada.component';

describe('PacaniadaComponent', () => {
  let component: PacaniadaComponent;
  let fixture: ComponentFixture<PacaniadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacaniadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacaniadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
