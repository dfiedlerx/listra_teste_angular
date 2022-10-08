import { Component, Input, OnInit } from '@angular/core';
import { faMapMarkerAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-shared-veiculo-item-localization',
  templateUrl: './shared-veiculo-item-localization.component.html',
  styleUrls: ['./shared-veiculo-item-localization.component.scss']
})
export class SharedVeiculoItemLocalizationComponent implements OnInit {

  faMapMarkerAlt : IconDefinition = faMapMarkerAlt;

  @Input() localization!: string|null;

  constructor() { }

  ngOnInit(): void {
  }

}
