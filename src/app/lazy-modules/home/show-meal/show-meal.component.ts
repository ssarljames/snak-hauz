import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/services/meal/meal.service';
import { Meal, MealAddon } from 'src/app/models/meal/meal';
import { StateService } from 'src/app/core/services/state/state.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from 'src/app/core/utils/form-group/form-group';
import { FormControl, Validators } from '@angular/forms';
import { MaterialSelectOption } from 'src/app/shared/utils/material-select/material-select.component';
import { OrderService } from 'src/app/services/order/order.service';
import { ModalService } from 'src/app/shared/services/modal/modal.service';

@Component({
  selector: 'app-show-meal',
  templateUrl: './show-meal.component.html',
  styleUrls: ['./show-meal.component.scss']
})
export class ShowMealComponent implements OnInit {

  meal: Meal;

  maxOrder: number = 20;
  minOrder: number = 1;

  addons_price: number = 0;

  form: FormGroup;
  allowedOrderQuantities: MaterialSelectOption[] = [];

  loading: boolean = true;

  constructor(private mealService: MealService,
              private stateService: StateService,
              private activatedRoute: ActivatedRoute,
              private orderService: OrderService,
              private modalService: ModalService) {


      this.form = new FormGroup({
        quantity: new FormControl(1, Validators.required),
        remarks: new FormControl('')
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
        this.loading = false;
      }
    )
  }

  addToCart(): void {
    this.loading = true;

    const order: any = {
      meal_id: this.meal.id,
      no_of_orders: this.form.value.quantity,
      addons: this.meal.addons.filter( addon => addon.selected)
    };

    this.orderService.create(order).subscribe(
      order => {
        this.modalService.toast('Meal was added to cart');
        this.meal.included_to_active_order = Number(this.form.controls.quantity.valid);
        this.fetchMeal();
        this.loading = false;
        this.orderService.updateActiveOrderedMeals();
      },
      err => {
        this.form.fillErrors(err);
      }
    )
  }

  selectAddon(addon: MealAddon): void {
    addon.selected = !addon.selected;

    this.addons_price += addon.selected ? Number(addon.pivot.add_on_price) : -Number(addon.pivot.add_on_price);
  }

}
