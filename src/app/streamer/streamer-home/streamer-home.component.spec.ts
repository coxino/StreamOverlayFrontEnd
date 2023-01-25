import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamerHomeComponent } from './streamer-home.component';

describe('StreamerHomeComponent', () => {
  let component: StreamerHomeComponent;
  let fixture: ComponentFixture<StreamerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamerHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
