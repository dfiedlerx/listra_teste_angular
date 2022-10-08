import { Component, Input, OnInit } from '@angular/core';

import { faCalendar } from '@fortawesome/free-regular-svg-icons';

import { faTachometerAlt, IconDefinition, faGears } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shared-veiculo-item-model-infos',
  templateUrl: './shared-veiculo-item-model-infos.component.html',
  styleUrls: ['./shared-veiculo-item-model-infos.component.scss']
})
export class SharedVeiculoItemModelInfosComponent implements OnInit {

  @Input() anoModeloFabricacao! : number;
  @Input() intQuilometragem! : number|string;
  @Input() vcoCambioTitulo! : string;

  faCalendar : IconDefinition = faCalendar;
  faTachometerAlt : IconDefinition = faTachometerAlt;
  faGears : IconDefinition = faGears;


  constructor() { }

  ngOnInit(): void {
    this.intQuilometragem = parseInt(this.intQuilometragem.toString()).toLocaleString("en-us").replace(",", ".");
  }

}
