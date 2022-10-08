import { Component, Input, OnInit } from '@angular/core';
import { Veiculo } from '../../models/veiculo.model';

@Component({
  selector: 'app-shared-veiculo-item',
  templateUrl: './shared-veiculo-item.component.html',
  styleUrls: ['./shared-veiculo-item.component.scss']
})
export class SharedVeiculoItemComponent implements OnInit {

  @Input() veiculo! : Veiculo;

  constructor() { }

  ngOnInit(): void {
  }

}
