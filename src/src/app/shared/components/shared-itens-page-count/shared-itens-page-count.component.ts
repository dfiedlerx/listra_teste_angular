import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-itens-page-count',
  templateUrl: './shared-itens-page-count.component.html',
  styleUrls: ['./shared-itens-page-count.component.scss']
})
export class SharedItensPageCountComponent implements OnInit {

  @Input() total! : number;
  @Input() totalSee! : number;

  constructor() { }

  ngOnInit(): void {
  }

}
