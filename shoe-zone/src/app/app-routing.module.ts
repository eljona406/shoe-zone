import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './component/add-to-cart/add-to-cart.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductsDetailComponent } from './component/products-detail/products-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'products/:id',
    component: ProductsDetailComponent
  },
  { path: 'cart', component: AddToCartComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'homepage'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    pathMatch   : 'full',
    redirectTo: 'not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
