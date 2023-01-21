import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentTooltipComponent } from './tournament-tooltip.component';

describe('TournamentTooltipComponent', () => {
  let component: TournamentTooltipComponent;
  let fixture: ComponentFixture<TournamentTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
