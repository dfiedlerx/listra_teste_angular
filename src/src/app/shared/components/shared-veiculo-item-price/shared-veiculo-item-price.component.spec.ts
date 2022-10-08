import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedVeiculoItemPriceComponent } from './shared-veiculo-item-price.component';

describe('SharedVeiculoItemPriceComponent', () => {
  let component: SharedVeiculoItemPriceComponent;
  let fixture: ComponentFixture<SharedVeiculoItemPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedVeiculoItemPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedVeiculoItemPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
