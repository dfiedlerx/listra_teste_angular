import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedVeiculoItemComponent } from './shared-veiculo-item.component';

describe('SharedVeiculoItemComponent', () => {
  let component: SharedVeiculoItemComponent;
  let fixture: ComponentFixture<SharedVeiculoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedVeiculoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedVeiculoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
