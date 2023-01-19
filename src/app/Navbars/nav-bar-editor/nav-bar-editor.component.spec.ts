import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarEditorComponent } from './nav-bar-editor.component';

describe('NavBarEditorComponent', () => {
  let component: NavBarEditorComponent;
  let fixture: ComponentFixture<NavBarEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
