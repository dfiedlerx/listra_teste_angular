import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedVeiculoItemModelDescriptionComponent } from './shared-veiculo-item-model-description.component';

describe('SharedVeiculoItemModelDescriptionComponent', () => {
  let component: SharedVeiculoItemModelDescriptionComponent;
  let fixture: ComponentFixture<SharedVeiculoItemModelDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedVeiculoItemModelDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedVeiculoItemModelDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
