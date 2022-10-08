import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTemplateBodyPageItemComponent } from './main-template-body-page-item.component';

describe('MainTemplateBodyPageItemComponent', () => {
  let component: MainTemplateBodyPageItemComponent;
  let fixture: ComponentFixture<MainTemplateBodyPageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTemplateBodyPageItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTemplateBodyPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
