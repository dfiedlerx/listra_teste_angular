import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTemplateFooterSectionComponent } from './main-template-footer-section.component';

describe('MainTemplateFooterSectionComponent', () => {
  let component: MainTemplateFooterSectionComponent;
  let fixture: ComponentFixture<MainTemplateFooterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTemplateFooterSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTemplateFooterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
