import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-template-footer-section-social-icon',
  templateUrl: './main-template-footer-section-social-icon.component.html',
  styleUrls: ['./main-template-footer-section-social-icon.component.scss']
})
export class MainTemplateFooterSectionSocialIconComponent implements OnInit {

  @Input() icon! : IconDefinition;

  constructor() { }

  ngOnInit(): void {
  }

}
