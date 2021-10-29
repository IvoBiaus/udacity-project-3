import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartScreenComponent } from './modules/cart/cart-screen/cart-screen.component';
import { SuccessScreenComponent } from './modules/cart/success-screen/success-screen.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './modules/shop/product-detail/product-detail.component';
import { ProductsListComponent } from './modules/shop/products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'cart',
    component: CartScreenComponent,
  },
  {
    path: 'cart/success',
    component: SuccessScreenComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
