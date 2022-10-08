import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLoadMoreComponent } from './shared-load-more.component';

describe('SharedLoadMoreComponent', () => {
  let component: SharedLoadMoreComponent;
  let fixture: ComponentFixture<SharedLoadMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedLoadMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedLoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
