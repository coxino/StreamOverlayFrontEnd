import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureObsComponent } from './configure-obs.component';

describe('ConfigureObsComponent', () => {
  let component: ConfigureObsComponent;
  let fixture: ComponentFixture<ConfigureObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureObsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
