import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorHomePageComponent } from './editor-home-page.component';

describe('EditorHomePageComponent', () => {
  let component: EditorHomePageComponent;
  let fixture: ComponentFixture<EditorHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
