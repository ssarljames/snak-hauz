import { GuestGuard } from './core/guards/guest/guest.guard';
import { AuthenticatedGuard } from './core/guards/authenticated/authenticated.guard';
import { PageNotFoundComponent } from './layout/errors/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedPageComponent } from './layout/authenticated-page/authenticated-page.component';
import { IndexComponent } from './layout/index/index.component';
import { GuestPageComponent } from './layout/guest-page/guest-page.component';
import { environment } from 'src/environments/environment';


const routes: Routes = [
  
  {
    path: '',
    canActivate: [ GuestGuard ],
    component: GuestPageComponent,
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'orders',
    canActivate: [ GuestGuard ],
    component: GuestPageComponent,
    loadChildren: () => import('./modules/orders/orders.module').then( m => m.OrdersModule)
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
