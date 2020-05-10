import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from 'src/app/core/services/resource/resource.service';
import { Meal } from 'src/app/models/meal/meal';

@Injectable({
  providedIn: 'root'
})
export class MealService extends ResourceService<Meal>{

  constructor(http: HttpClient) {
    super(http, 'guest/meals');
  }
}
