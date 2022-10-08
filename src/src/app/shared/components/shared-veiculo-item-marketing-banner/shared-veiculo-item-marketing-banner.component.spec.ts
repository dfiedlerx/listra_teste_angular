import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedVeiculoItemMarketingBannerComponent } from './shared-veiculo-item-marketing-banner.component';

describe('SharedVeiculoItemMarketingBannerComponent', () => {
  let component: SharedVeiculoItemMarketingBannerComponent;
  let fixture: ComponentFixture<SharedVeiculoItemMarketingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedVeiculoItemMarketingBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedVeiculoItemMarketingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
