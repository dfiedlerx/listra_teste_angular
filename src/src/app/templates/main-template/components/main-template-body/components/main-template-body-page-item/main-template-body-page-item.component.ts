import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-template-body-page-item',
  templateUrl: './main-template-body-page-item.component.html',
  styleUrls: ['./main-template-body-page-item.component.scss']
})
export class MainTemplateBodyPageItemComponent implements OnInit {

  @Input() text : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
