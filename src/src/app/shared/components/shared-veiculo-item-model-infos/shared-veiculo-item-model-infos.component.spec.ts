import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedVeiculoItemModelInfosComponent } from './shared-veiculo-item-model-infos.component';

describe('SharedVeiculoItemModelInfosComponent', () => {
  let component: SharedVeiculoItemModelInfosComponent;
  let fixture: ComponentFixture<SharedVeiculoItemModelInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedVeiculoItemModelInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedVeiculoItemModelInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
