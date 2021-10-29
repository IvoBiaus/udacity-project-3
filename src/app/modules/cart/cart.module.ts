import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { ProductsListComponent } from './products-list/products-list.component';
import { FormComponent } from './form/form.component';
import { SuccessScreenComponent } from './success-screen/success-screen.component';
import { CartScreenComponent } from './cart-screen/cart-screen.component';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

const materialComponents = [
  MatButtonModule,
  MatInputModule,
  MatStepperModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    ProductsListComponent,
    FormComponent,
    SuccessScreenComponent,
    CartScreenComponent,
    EmptyCartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    ...materialComponents,
  ],
})
export class CartModule {}
