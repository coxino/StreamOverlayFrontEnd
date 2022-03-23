import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentLivebattleComponent } from './tournament-livebattle.component';

describe('TournamentLivebattleComponent', () => {
  let component: TournamentLivebattleComponent;
  let fixture: ComponentFixture<TournamentLivebattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentLivebattleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentLivebattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
