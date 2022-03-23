import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonushuntEditorComponent } from './bonushunt-editor.component';

describe('BonushuntEditorComponent', () => {
  let component: BonushuntEditorComponent;
  let fixture: ComponentFixture<BonushuntEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonushuntEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonushuntEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
