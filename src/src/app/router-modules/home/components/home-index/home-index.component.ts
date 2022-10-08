import { Component, OnInit } from '@angular/core';
import { VcoVeiculosGetListResultado } from 'src/app/shared/models/vco-veiculos-get-list-resultado.model';
import { VeiculosGetList } from 'src/app/shared/models/veiculos-get-list.model';
import { VeiculosService } from 'src/app/shared/services/veiculos/veiculos.service';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})
export class HomeIndexComponent implements OnInit {

  constructor(private veiculosService : VeiculosService) { }

  veiculosList! : VcoVeiculosGetListResultado;

  ngOnInit(): void {
    this.veiculosService.getList().subscribe((data : VeiculosGetList) => {
      if (data.status) {
        this.veiculosList = data.resultados;
      }
    });
  }

}
