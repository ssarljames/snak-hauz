import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/services/meal/meal.service';
import { Meal } from 'src/app/models/meal/meal';
import { StateService } from 'src/app/core/services/state/state.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from 'src/app/core/utils/form-group/form-group';
import { FormControl, Validators } from '@angular/forms';
import { MaterialSelectOption } from '../../shared/utils/material-select/material-select.component';
import { OrderService } from 'src/app/services/order/order.service';
import { Order } from 'src/app/models/order/order';
import { ModalService } from '../../shared/services/modal/modal.service';

@Component({
  selector: 'app-show-meal',
  templateUrl: './show-meal.component.html',
  styleUrls: ['./show-meal.component.scss']
})
export class ShowMealComponent implements OnInit {

  meal: Meal;

  maxOrder: number = 20;
  minOrder: number = 1;

  form: FormGroup;
  allowedOrderQuantities: MaterialSelectOption[] = [];

  constructor(private mealService: MealService,
              private stateService: StateService,
              private activatedRoute: ActivatedRoute,
              private orderService: OrderService,
              private modalService: ModalService) {


      this.form = new FormGroup({
        quantity: new FormControl(1, Validators.required)
      });

      for(let i=this.minOrder; i <= this.maxOrder; i++)
        this.allowedOrderQuantities.push({
          value: i,
          label: i + ''
        });

  }

  ngOnInit(): void {
    this.meal = this.stateService.get('selected_meal');

    this.fetchMeal();
  }

  fetchMeal(): void{
    this.mealService.read( this.activatedRoute.snapshot.params.id ).subscribe(
      meal => {
        this.meal = meal;
        this.stateService.set('selected_meal', meal);
      }
    )
  }

  addToCart(): void {

    const order: any = {
      meal_id: this.meal.id,
      no_of_orders: this.form.value.quantity
    };

    this.orderService.create(order).subscribe(
      order => {
        this.modalService.toast('Meal was added to cart');
      },
      err => {
        this.form.fillErrors(err);
      }
    )
  }

}
