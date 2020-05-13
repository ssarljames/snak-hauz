import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
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
    MatCarouselModule,
    InfiniteScrollModule
  ],
  entryComponents: [
    CarouselComponent,
    MealCardComponent
  ]

})
export class HomeModule { }
