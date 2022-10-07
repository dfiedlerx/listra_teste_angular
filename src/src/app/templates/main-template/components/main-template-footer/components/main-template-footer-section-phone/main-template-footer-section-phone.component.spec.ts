import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTemplateFooterSectionPhoneComponent } from './main-template-footer-section-phone.component';

describe('MainTemplateFooterSectionPhoneComponent', () => {
  let component: MainTemplateFooterSectionPhoneComponent;
  let fixture: ComponentFixture<MainTemplateFooterSectionPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTemplateFooterSectionPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTemplateFooterSectionPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
