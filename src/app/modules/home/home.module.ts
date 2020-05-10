import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index/index.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { MealCardComponent } from './meal-card/meal-card.component';
import { ShowMealComponent } from './show-meal/show-meal.component';


@NgModule({
  declarations: [
    IndexComponent,
    CarouselComponent,
    MealCardComponent,
    ShowMealComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatCarouselModule
  ],
  entryComponents: [
    CarouselComponent,
    MealCardComponent
  ]

})
export class HomeModule { }
