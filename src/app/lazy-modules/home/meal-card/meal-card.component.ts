import { Component, OnInit, Input } from '@angular/core';
import { Meal } from 'src/app/models/meal/meal';
import { StateService } from 'src/app/core/services/state/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss']
})
export class MealCardComponent implements OnInit {

  @Input() meal: Meal;

  constructor(private stateService: StateService,
              private router: Router) { }

  ngOnInit(): void {
  }

  view(meal: Meal): void {
    setTimeout( () => {
      this.stateService.set('selected_meal', meal);
      this.router.navigate(['/meals', meal.id]);
    }, 250);
  }

}
