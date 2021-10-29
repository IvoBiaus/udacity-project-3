import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'shared-product-buttons',
  templateUrl: './product-buttons.component.html',
  styleUrls: ['./product-buttons.component.scss'],
})
export class ProductButtonsComponent implements OnInit {
  @Input() product!: Product;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(): void {
    this.cartService.addProduct(this.product);
  }

  removeFromCart(): void {
    this.cartService.removeItem(this.product.id);
  }

  getAmount(): number {
    return this.cartService.getProducts()[this.product.id]?.amount || 0;
  }

  remove(): void {
    this.cartService.removeProduct(this.product.id);
  }
}
