import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-page-main-title',
  templateUrl: './shared-page-main-title.component.html',
  styleUrls: ['./shared-page-main-title.component.scss']
})
export class SharedPageMainTitleComponent implements OnInit {

  @Input() text : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
