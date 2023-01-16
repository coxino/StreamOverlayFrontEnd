import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleRoyaleEditComponent } from './battle-royale-edit.component';

describe('BattleRoyaleEditComponent', () => {
  let component: BattleRoyaleEditComponent;
  let fixture: ComponentFixture<BattleRoyaleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleRoyaleEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleRoyaleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
