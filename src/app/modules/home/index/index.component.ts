import { Component, OnInit, OnDestroy } from '@angular/core';
import { MealService } from 'src/app/services/meal/meal.service';
import { Meal } from 'src/app/models/meal/meal';
import { StateService } from 'src/app/core/services/state/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {

  meals: Meal[] = [];

  constructor(private mealService: MealService,
              private stateService: StateService,
              private router: Router) {

  }

  ngOnInit(): void {

    const meals = this.stateService.get('home.meals');

    if(meals)
      this.meals = meals;

    this.fetchMeals();
  }

  ngOnDestroy(): void {
    this.stateService.set('home.meals', this.meals);
  }

  fetchMeals(): void{
    this.mealService.query().subscribe(meals => {
      this.meals = meals;
    });
  }

  view(meal: Meal): void {
    this.stateService.set('selected_meal', meal);
    this.router.navigate(['/meals', meal.id]);
  }

}
