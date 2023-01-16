import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrisiLaGiveawayComponent } from './inscrisi-la-giveaway.component';

describe('InscrisiLaGiveawayComponent', () => {
  let component: InscrisiLaGiveawayComponent;
  let fixture: ComponentFixture<InscrisiLaGiveawayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscrisiLaGiveawayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscrisiLaGiveawayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
