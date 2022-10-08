import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedVeiculoItemFavoriteComponent } from './shared-veiculo-item-favorite.component';

describe('SharedVeiculoItemFavoriteComponent', () => {
  let component: SharedVeiculoItemFavoriteComponent;
  let fixture: ComponentFixture<SharedVeiculoItemFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedVeiculoItemFavoriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedVeiculoItemFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
