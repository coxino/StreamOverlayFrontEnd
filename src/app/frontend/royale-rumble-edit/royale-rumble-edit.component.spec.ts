import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyaleRumbleEditComponent } from './royale-rumble-edit.component';

describe('RoyaleRumbleEditComponent', () => {
  let component: RoyaleRumbleEditComponent;
  let fixture: ComponentFixture<RoyaleRumbleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyaleRumbleEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyaleRumbleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
