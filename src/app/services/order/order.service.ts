import { Injectable } from '@angular/core';
import { ResourceService, HttpShowResponse } from 'src/app/core/services/resource/resource.service';
import { Order } from 'src/app/models/order/order';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends ResourceService<Order> {


  private $activeOrderedMeals: BehaviorSubject<number>;

  constructor(http: HttpClient) {
    super(http, 'guest/orders');

    this.$activeOrderedMeals = new BehaviorSubject(0);
  }

  public updateActiveOrderedMeals(): void{
    this.queryRaw({
      params: {
        active_ordered_meal_count:  true
      }
    }).subscribe( (response) => {
      if(response && response.count != undefined && response.count != null)
        this.$activeOrderedMeals.next( response.count );
    });
  }

  getOrderedMealsCount(): BehaviorSubject<number>{
    return this.$activeOrderedMeals;
  }

}
