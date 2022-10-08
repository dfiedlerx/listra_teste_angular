import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeIndexComponent } from './components/home-index/home-index.component';
import { HomeIndexVeiculosCountComponent } from './components/home-index-veiculos-count/home-index-veiculos-count.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HomeIndexComponent,
    HomeIndexVeiculosCountComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    SharedModule,
  ]
})
export class HomeModule { }
