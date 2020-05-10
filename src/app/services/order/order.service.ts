import { Injectable } from '@angular/core';
import { ResourceService } from 'src/app/core/services/resource/resource.service';
import { Order } from 'src/app/models/order/order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends ResourceService<Order> {

  constructor(http: HttpClient) {
    super(http, 'guest/orders');
  }
}
