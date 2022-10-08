import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-veiculo-item-model-description',
  templateUrl: './shared-veiculo-item-model-description.component.html',
  styleUrls: ['./shared-veiculo-item-model-description.component.scss'],
})
export class SharedVeiculoItemModelDescriptionComponent implements OnInit {
  @Input() model!: string|null;
  @Input() version!: string|null;

  constructor() {}

  ngOnInit(): void {}
}
