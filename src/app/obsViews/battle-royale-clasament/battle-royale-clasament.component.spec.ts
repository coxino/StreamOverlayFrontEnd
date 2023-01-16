import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleRoyaleClasamentComponent } from './battle-royale-clasament.component';

describe('BattleRoyaleClasamentComponent', () => {
  let component: BattleRoyaleClasamentComponent;
  let fixture: ComponentFixture<BattleRoyaleClasamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleRoyaleClasamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleRoyaleClasamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
