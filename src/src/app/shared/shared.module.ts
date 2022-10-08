import { LOCALE_ID, NgModule } from '@angular/core';
import { SharedPageMainTitleComponent } from './components/shared-page-main-title/shared-page-main-title.component';
import { SharedLoadMoreComponent } from './components/shared-load-more/shared-load-more.component';
import { SharedItensPageCountComponent } from './components/shared-itens-page-count/shared-itens-page-count.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedVeiculoItemComponent } from './components/shared-veiculo-item/shared-veiculo-item.component';
import { SharedVeiculoItemImageComponent } from './components/shared-veiculo-item-image/shared-veiculo-item-image.component';
import { SharedVeiculoItemLocalizationComponent } from './components/shared-veiculo-item-localization/shared-veiculo-item-localization.component';
import { SharedVeiculoItemModelDescriptionComponent } from './components/shared-veiculo-item-model-description/shared-veiculo-item-model-description.component';
import { SharedVeiculoItemModelInfosComponent } from './components/shared-veiculo-item-model-infos/shared-veiculo-item-model-infos.component';
import { SharedVeiculoItemPriceComponent } from './components/shared-veiculo-item-price/shared-veiculo-item-price.component';
import { SharedVeiculoItemFavoriteComponent } from './components/shared-veiculo-item-favorite/shared-veiculo-item-favorite.component';
import { CommonModule } from '@angular/common';

/*
 Use this module only for shared and common components for entire application, for the
 best lazyload use, do not use this module to share specific components or situational
 components that will not be used in a large part of the system.
 For this case, create a new module in the 'modules' folder and place your situational
 components inside it, separating them according to their use and need.
*/

@NgModule({
  declarations: [
    SharedPageMainTitleComponent,
    SharedLoadMoreComponent,
    SharedItensPageCountComponent,
    SharedVeiculoItemComponent,
    SharedVeiculoItemImageComponent,
    SharedVeiculoItemLocalizationComponent,
    SharedVeiculoItemModelDescriptionComponent,
    SharedVeiculoItemModelInfosComponent,
    SharedVeiculoItemPriceComponent,
    SharedVeiculoItemFavoriteComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    SharedPageMainTitleComponent,
    SharedLoadMoreComponent,
    SharedItensPageCountComponent,
    SharedVeiculoItemComponent,
  ]
})
export class SharedModule {}
