import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ShowMealComponent } from './show-meal/show-meal.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IndexComponent
  },
  {
    path: 'meals/:id',
    pathMatch: 'full',
    component: ShowMealComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
