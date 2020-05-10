import { Component, OnInit, Input } from '@angular/core';
import { Meal } from 'src/app/models/meal/meal';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss']
})
export class MealCardComponent implements OnInit {

  @Input() meal: Meal;

  constructor() { }

  ngOnInit(): void {
  }

}
