import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-template-footer-section-link',
  templateUrl: './main-template-footer-section-link.component.html',
  styleUrls: ['./main-template-footer-section-link.component.scss']
})
export class MainTemplateFooterSectionLinkComponent implements OnInit {

  @Input() text!: string;
  @Input() link!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
