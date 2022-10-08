import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedVeiculoItemLocalizationComponent } from './shared-veiculo-item-localization.component';

describe('SharedVeiculoItemLocalizationComponent', () => {
  let component: SharedVeiculoItemLocalizationComponent;
  let fixture: ComponentFixture<SharedVeiculoItemLocalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedVeiculoItemLocalizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedVeiculoItemLocalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
