import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

const materialComponents = [
  MatCardModule,
  MatProgressSpinnerModule,
  MatRippleModule,
];

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductComponent,
    ProductDetailComponent,
  ],
  imports: [CommonModule, SharedComponentsModule, ...materialComponents],
})
export class ShopModule {}
