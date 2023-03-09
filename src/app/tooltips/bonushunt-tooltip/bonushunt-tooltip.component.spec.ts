import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonushuntTooltipComponent } from './bonushunt-tooltip.component';

describe('BonushuntTooltipComponent', () => {
  let component: BonushuntTooltipComponent;
  let fixture: ComponentFixture<BonushuntTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonushuntTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonushuntTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
