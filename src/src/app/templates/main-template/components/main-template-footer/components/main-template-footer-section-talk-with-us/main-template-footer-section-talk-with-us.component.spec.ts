import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTemplateFooterSectionTalkWithUsComponent } from './main-template-footer-section-talk-with-us.component';

describe('MainTemplateFooterSectionTalkWithUsComponent', () => {
  let component: MainTemplateFooterSectionTalkWithUsComponent;
  let fixture: ComponentFixture<MainTemplateFooterSectionTalkWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTemplateFooterSectionTalkWithUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTemplateFooterSectionTalkWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
