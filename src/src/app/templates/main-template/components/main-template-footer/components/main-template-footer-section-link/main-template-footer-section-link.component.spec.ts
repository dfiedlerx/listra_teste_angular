import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTemplateFooterSectionLinkComponent } from './main-template-footer-section-link.component';

describe('MainTemplateFooterSectionLinkComponent', () => {
  let component: MainTemplateFooterSectionLinkComponent;
  let fixture: ComponentFixture<MainTemplateFooterSectionLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTemplateFooterSectionLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTemplateFooterSectionLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
