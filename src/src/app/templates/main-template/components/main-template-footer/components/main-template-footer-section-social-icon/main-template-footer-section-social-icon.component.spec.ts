import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTemplateFooterSectionSocialIconComponent } from './main-template-footer-section-social-icon.component';

describe('MainTemplateFooterSectionSocialIconComponent', () => {
  let component: MainTemplateFooterSectionSocialIconComponent;
  let fixture: ComponentFixture<MainTemplateFooterSectionSocialIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTemplateFooterSectionSocialIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTemplateFooterSectionSocialIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
