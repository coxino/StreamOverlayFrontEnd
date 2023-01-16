import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteNeedGreedComponent } from './vote-need-greed.component';

describe('VoteNeedGreedComponent', () => {
  let component: VoteNeedGreedComponent;
  let fixture: ComponentFixture<VoteNeedGreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteNeedGreedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteNeedGreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
