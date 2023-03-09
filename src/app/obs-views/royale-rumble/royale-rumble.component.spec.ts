import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyaleRumbleComponent } from './royale-rumble.component';

describe('RoyaleRumbleComponent', () => {
  let component: RoyaleRumbleComponent;
  let fixture: ComponentFixture<RoyaleRumbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyaleRumbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyaleRumbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
