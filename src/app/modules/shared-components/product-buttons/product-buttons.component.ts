import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'shared-product-buttons',
  templateUrl: './product-buttons.component.html',
  styleUrls: ['./product-buttons.component.scss'],
})
export class ProductButtonsComponent implements OnInit {
  @Input() product!: Product;

  constructor(
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  addToCart(): void {
    this.cartService.addProduct(this.product);
    this.snackBar.open('1 Product item added 👕!');
  }

  removeFromCart(): void {
    this.cartService.removeItem(this.product.id);
    this.snackBar.open('1 Product item removed 🔻!');
  }

  getAmount(): number {
    return this.cartService.getProducts()[this.product.id]?.amount || 0;
  }

  remove(): void {
    this.cartService.removeProduct(this.product.id);
    this.snackBar.open('All Product items removed 🔥!');
  }
}
