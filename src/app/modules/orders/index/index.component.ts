import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { StateService } from 'src/app/core/services/state/state.service';
import { Order } from 'src/app/models/order/order';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderService,
              private stateService: StateService ) { }

  ngOnInit(): void {
    this.orders = this.stateService.get('orders') ?? [];

    this.fetchOrders();
  }

  fetchOrders(): void{
    this.orderService.query().subscribe( orders => {
      this.orders = orders;
      this.stateService.set('orders', this.orders);
    });
  }



}
