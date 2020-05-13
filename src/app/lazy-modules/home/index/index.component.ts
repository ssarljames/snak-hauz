import { Component, OnInit, OnDestroy } from '@angular/core';
import { MealService } from 'src/app/services/meal/meal.service';
import { Meal } from 'src/app/models/meal/meal';
import { StateService } from 'src/app/core/services/state/state.service';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/shared/services/modal/modal.service';

interface MealsOnDasboard {
  topSellingMeals: Meal[];
  availableMeals: Meal[];
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {

  meals: MealsOnDasboard = {
    topSellingMeals: [],
    availableMeals: []
  }

  n: number = 0;

  constructor(private mealService: MealService,
              private stateService: StateService,
              private router: Router,
              private modalService: ModalService) {

  }

  ngOnInit(): void {

    const meals: MealsOnDasboard = this.stateService.get('meals');

    if(meals)
      this.meals = meals;
    

    this.fetchMeals();
  }

  ngOnDestroy(): void {
    this.stateService.set('meals', this.meals);
  }

  fetchMeals(): void{
    this.mealService.query().subscribe(meals => {
      this.meals.topSellingMeals = meals;
      this.meals.availableMeals = meals;
    });
  }

  onScroll() {
    this.modalService.toast('Scrolled: ' + this.n++);
    this.meals.availableMeals = [
      ...this.meals.availableMeals,
      ...this.meals.availableMeals.filter((v,i,a) => i < 4)
    ]
  }

}
