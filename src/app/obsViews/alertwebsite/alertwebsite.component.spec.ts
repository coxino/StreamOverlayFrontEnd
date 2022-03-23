import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertwebsiteComponent } from './alertwebsite.component';

describe('AlertwebsiteComponent', () => {
  let component: AlertwebsiteComponent;
  let fixture: ComponentFixture<AlertwebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertwebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertwebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
