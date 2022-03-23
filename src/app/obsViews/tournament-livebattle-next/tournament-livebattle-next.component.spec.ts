import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentLivebattleNextComponent } from './tournament-livebattle-next.component';

describe('TournamentLivebattleNextComponent', () => {
  let component: TournamentLivebattleNextComponent;
  let fixture: ComponentFixture<TournamentLivebattleNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentLivebattleNextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentLivebattleNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
