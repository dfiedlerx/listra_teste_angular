import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { VeiculosService } from './veiculos.service';

describe('VeiculosService', () => {
  let service: VeiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(VeiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
