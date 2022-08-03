import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacaniadaComponentE } from './pacaniada.component';

describe('PacaniadaComponent', () => {
  let component: PacaniadaComponentE;
  let fixture: ComponentFixture<PacaniadaComponentE>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacaniadaComponentE ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacaniadaComponentE);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
