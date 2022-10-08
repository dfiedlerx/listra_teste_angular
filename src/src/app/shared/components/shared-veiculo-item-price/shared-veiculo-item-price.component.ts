import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-veiculo-item-price',
  templateUrl: './shared-veiculo-item-price.component.html',
  styleUrls: ['./shared-veiculo-item-price.component.scss']
})
export class SharedVeiculoItemPriceComponent implements OnInit {

  @Input() price! : number|string;

  constructor() { }

  ngOnInit(): void {
    this.price = parseInt(this.price.toString()).toLocaleString("en-us").replace(",", ".");
  }

}
