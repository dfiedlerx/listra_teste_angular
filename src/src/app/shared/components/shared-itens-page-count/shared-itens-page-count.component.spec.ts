import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedItensPageCountComponent } from './shared-itens-page-count.component';

describe('SharedItensPageCountComponent', () => {
  let component: SharedItensPageCountComponent;
  let fixture: ComponentFixture<SharedItensPageCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedItensPageCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedItensPageCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
