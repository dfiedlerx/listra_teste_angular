import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { rootRoute } from 'src/app/shared/constants/configs/routes.configs';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-main-template-footer',
  templateUrl: './main-template-footer.component.html',
  styleUrls: ['./main-template-footer.component.scss']
})
export class MainTemplateFooterComponent implements OnInit {

  rootRoute : string = rootRoute;

  //Icons
  faFacebookF : IconDefinition = faFacebookF;
  faInstagram : IconDefinition = faInstagram;
  faTwitter : IconDefinition = faTwitter;
  faLinkedinIn : IconDefinition = faLinkedinIn;

  constructor() { }

  ngOnInit(): void {
  }

}
