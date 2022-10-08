import { Component, OnInit } from '@angular/core';
import { faWhatsapp, IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main-template-footer-section-talk-with-us',
  templateUrl: './main-template-footer-section-talk-with-us.component.html',
  styleUrls: ['./main-template-footer-section-talk-with-us.component.scss']
})
export class MainTemplateFooterSectionTalkWithUsComponent implements OnInit {

  faWhatsapp : IconDefinition = faWhatsapp;

  constructor() { }

  ngOnInit(): void {
  }

}
