import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { FormComponent } from './form/form.component';
import { SuccessScreenComponent } from './success-screen/success-screen.component';
import { CartScreenComponent } from './cart-screen/cart-screen.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    FormComponent,
    SuccessScreenComponent,
    CartScreenComponent,
  ],
  imports: [CommonModule],
})
export class CartModule {}
