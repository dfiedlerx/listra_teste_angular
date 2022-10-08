import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedVeiculoItemImageComponent } from './shared-veiculo-item-image.component';

describe('SharedVeiculoItemImageComponent', () => {
  let component: SharedVeiculoItemImageComponent;
  let fixture: ComponentFixture<SharedVeiculoItemImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedVeiculoItemImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedVeiculoItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
