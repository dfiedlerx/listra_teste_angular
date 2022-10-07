import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTemplateFooterSectionWhatsIconComponent } from './main-template-footer-section-whats-icon.component';

describe('MainTemplateFooterSectionWhatsIconComponent', () => {
  let component: MainTemplateFooterSectionWhatsIconComponent;
  let fixture: ComponentFixture<MainTemplateFooterSectionWhatsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTemplateFooterSectionWhatsIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTemplateFooterSectionWhatsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
