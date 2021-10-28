import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartScreenComponent } from './cart/cart-screen/cart-screen.component';
import { SuccessScreenComponent } from './cart/success-screen/success-screen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';
import { ShopScreenComponent } from './shop/shop-screen/shop-screen.component';

const routes: Routes = [
  {
    path: '',
    component: ShopScreenComponent,
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
