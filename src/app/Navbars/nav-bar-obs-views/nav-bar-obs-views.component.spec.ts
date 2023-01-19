import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarObsViewsComponent } from './nav-bar-obs-views.component';

describe('NavBarObsViewsComponent', () => {
  let component: NavBarObsViewsComponent;
  let fixture: ComponentFixture<NavBarObsViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarObsViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarObsViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
