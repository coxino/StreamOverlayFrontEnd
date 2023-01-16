import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoataAniversaraComponent } from './roata-aniversara.component';

describe('RoataAniversaraComponent', () => {
  let component: RoataAniversaraComponent;
  let fixture: ComponentFixture<RoataAniversaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoataAniversaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoataAniversaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
