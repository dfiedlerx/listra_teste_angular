import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTemplateFooterSectionTitleComponent } from './main-template-footer-section-title.component';

describe('MainTemplateFooterSectionTitleComponent', () => {
  let component: MainTemplateFooterSectionTitleComponent;
  let fixture: ComponentFixture<MainTemplateFooterSectionTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTemplateFooterSectionTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTemplateFooterSectionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
