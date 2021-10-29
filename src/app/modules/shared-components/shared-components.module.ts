import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ProductButtonsComponent } from './product-buttons/product-buttons.component';

const materialComponents = [MatIconModule, MatButtonModule, MatSnackBarModule];

@NgModule({
  declarations: [ProductButtonsComponent],
  imports: [CommonModule, ...materialComponents],
  exports: [ProductButtonsComponent],
})
export class SharedComponentsModule {}
