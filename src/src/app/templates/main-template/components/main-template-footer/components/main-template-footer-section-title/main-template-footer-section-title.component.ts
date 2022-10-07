import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-template-footer-section-title',
  templateUrl: './main-template-footer-section-title.component.html',
  styleUrls: ['./main-template-footer-section-title.component.scss']
})
export class MainTemplateFooterSectionTitleComponent implements OnInit {

  @Input() noBold: boolean = false;
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
