import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomThemeEditorComponent } from './custom-theme-editor.component';

describe('CustomThemeEditorComponent', () => {
  let component: CustomThemeEditorComponent;
  let fixture: ComponentFixture<CustomThemeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomThemeEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomThemeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
