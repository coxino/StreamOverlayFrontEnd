import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaobsComponent } from './ligaobs.component';

describe('LigaobsComponent', () => {
  let component: LigaobsComponent;
  let fixture: ComponentFixture<LigaobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigaobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LigaobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
