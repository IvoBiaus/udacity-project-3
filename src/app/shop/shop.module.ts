import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShopModule { }