import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedPageMainTitleComponent } from './shared-page-main-title.component';

describe('SharedPageMainTitleComponent', () => {
  let component: SharedPageMainTitleComponent;
  let fixture: ComponentFixture<SharedPageMainTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedPageMainTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedPageMainTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
