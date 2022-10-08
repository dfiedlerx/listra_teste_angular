import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTemplateLoadingComponent } from './main-template-loading.component';

describe('MainTemplateLoadingComponent', () => {
  let component: MainTemplateLoadingComponent;
  let fixture: ComponentFixture<MainTemplateLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTemplateLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTemplateLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
