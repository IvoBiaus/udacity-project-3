import { Component, Input, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'shop-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  amount: number = 0;

  constructor(private cartService: CartService) {}

  addToCart(): void {
    const cart = this.cartService.addProduct(this.product);
    this.amount++;
  }

  removeFromCart(): void {
    const cart = this.cartService.removeItem(this.product.id);
    this.amount--;
  }

  atCart(): boolean {
    return !!this.cartService.getProducts()[this.product.id];
  }

  ngOnInit(): void {}
}
