import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIndexVeiculosCountComponent } from './home-index-veiculos-count.component';

describe('HomeIndexVeiculosCountComponent', () => {
  let component: HomeIndexVeiculosCountComponent;
  let fixture: ComponentFixture<HomeIndexVeiculosCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeIndexVeiculosCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeIndexVeiculosCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
