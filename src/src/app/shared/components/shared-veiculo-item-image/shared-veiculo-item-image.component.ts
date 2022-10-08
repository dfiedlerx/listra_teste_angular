import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-veiculo-item-image',
  templateUrl: './shared-veiculo-item-image.component.html',
  styleUrls: ['./shared-veiculo-item-image.component.scss']
})
export class SharedVeiculoItemImageComponent implements OnInit {

  @Input() url! : string;

  constructor() { }

  ngOnInit(): void {
  }

}
