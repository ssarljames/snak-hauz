import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { StateService } from 'src/app/core/services/state/state.service';
import { Order } from 'src/app/models/order/order';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { CheckoutModalComponent } from '../checkout-modal/checkout-modal.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  orders: Order[];

  activeOrder: Order = null;

  constructor(private orderService: OrderService,
              private stateService: StateService,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.orders = this.stateService.get('orders') ?? [];

    this.fetchOrders();
  }

  fetchOrders(): void{
    this.orderService.query().subscribe( orders => {
      this.orders = orders;
      this.stateService.set('orders', this.orders);

      this.activeOrder = orders.find( order => order.status == 0)
    });
  }


  cancelOrder(): void{
    const order: any = {
      id: 0,
      cancel_current_orders: true,
      action: 'cancel'
    }
    this.orderService.update(order).subscribe( order => {
      this.orderService.updateActiveOrderedMeals();
      this.fetchOrders();
    });
  }

  checkoutOrder(): void{
    const modal: MatDialogRef<CheckoutModalComponent> = this.matDialog.open(CheckoutModalComponent, {
      disableClose: true,
      width: '600px'
    });

    modal.componentInstance.order = this.orders[0];

    modal.afterClosed().subscribe( order => {
      if(order)
        this.fetchOrders()
    })
  }



}
