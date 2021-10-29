import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShopScreenComponent } from './shop-screen/shop-screen.component';

const materialComponents = [
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductComponent,
    ProductDetailComponent,
    ShopScreenComponent,
  ],
  imports: [CommonModule, ...materialComponents],
})
export class ShopModule {}
