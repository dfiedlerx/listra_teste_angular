import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTemplateBodyComponent } from './main-template/components/main-template-body/main-template-body.component';
import { MainTemplateComponent } from './main-template/main-template.component';
import { MainTemplateFooterComponent } from './main-template/components/main-template-footer/main-template-footer.component';
import { MainTemplateHeaderComponent } from './main-template/components/main-template-header/main-template-header.component';
import { RouterModule } from '@angular/router';
import { MainTemplateFooterSectionComponent } from './main-template/components/main-template-footer/components/main-template-footer-section/main-template-footer-section.component';
import { MainTemplateFooterSectionTitleComponent } from './main-template/components/main-template-footer/components/main-template-footer-section-title/main-template-footer-section-title.component';
import { MainTemplateFooterSectionLinkComponent } from './main-template/components/main-template-footer/components/main-template-footer-section-link/main-template-footer-section-link.component';
import { MainTemplateFooterSectionPhoneComponent } from './main-template/components/main-template-footer/components/main-template-footer-section-phone/main-template-footer-section-phone.component';
import { MainTemplateFooterSectionWhatsIconComponent } from './main-template/components/main-template-footer/components/main-template-footer-section-whats-icon/main-template-footer-section-whats-icon.component';
import { MainTemplateFooterSectionSocialIconComponent } from './main-template/components/main-template-footer/components/main-template-footer-section-social-icon/main-template-footer-section-social-icon.component';
import { MainTemplateFooterSectionTalkWithUsComponent } from './main-template/components/main-template-footer/components/main-template-footer-section-talk-with-us/main-template-footer-section-talk-with-us.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainTemplateBodyPageItemComponent } from './main-template/components/main-template-body/components/main-template-body-page-item/main-template-body-page-item.component';
import { MainTemplateLoadingComponent } from './main-template/components/main-template-loading/main-template-loading.component';



@NgModule({
  declarations: [
    MainTemplateBodyComponent,
    MainTemplateComponent,
    MainTemplateFooterComponent,
    MainTemplateHeaderComponent,
    MainTemplateFooterSectionComponent,
    MainTemplateFooterSectionTitleComponent,
    MainTemplateFooterSectionLinkComponent,
    MainTemplateFooterSectionPhoneComponent,
    MainTemplateFooterSectionWhatsIconComponent,
    MainTemplateFooterSectionSocialIconComponent,
    MainTemplateFooterSectionTalkWithUsComponent,
    MainTemplateBodyPageItemComponent,
    MainTemplateLoadingComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    MainTemplateComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TemplatesModule { }
