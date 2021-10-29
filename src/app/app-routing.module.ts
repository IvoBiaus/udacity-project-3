import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartScreenComponent } from './modules/cart/cart-screen/cart-screen.component';
import { SuccessScreenComponent } from './modules/cart/success-screen/success-screen.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './modules/shop/product-detail/product-detail.component';
import { ShopScreenComponent } from './modules/shop/shop-screen/shop-screen.component';

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
