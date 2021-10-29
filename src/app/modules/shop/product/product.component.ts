import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'shop-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  constructor(private cartService: CartService, private router: Router) {}

  addToCart(): void {
    this.cartService.addProduct(this.product);
  }

  removeFromCart(): void {
    this.cartService.removeItem(this.product.id);
  }

  getAmount(): number {
    return this.cartService.getProducts()[this.product.id]?.amount || 0;
  }

  remove() {
    this.cartService.removeProduct(this.product.id);
  }

  goToDetails() {
    this.router.navigateByUrl(`/product/${this.product.id}`);
  }

  ngOnInit(): void {}
}
