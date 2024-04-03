import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './perfumes/cart/cart.component';
import { ErrorComponent } from './error/error.component';
import { AuthActivate } from './core/guards/auth.activate';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthActivate],
  },
  {
    path: '**',
    // component: ErrorComponent,
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
