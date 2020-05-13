import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CheckoutModalComponent } from './checkout-modal/checkout-modal.component';


@NgModule({
  declarations: [IndexComponent, CheckoutModalComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
