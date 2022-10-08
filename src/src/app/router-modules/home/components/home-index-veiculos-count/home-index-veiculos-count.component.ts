import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-index-veiculos-count',
  templateUrl: './home-index-veiculos-count.component.html',
  styleUrls: ['./home-index-veiculos-count.component.scss']
})
export class HomeIndexVeiculosCountComponent implements OnInit {

  @Input() total! : number;

  constructor() { }

  ngOnInit(): void {
  }

}
