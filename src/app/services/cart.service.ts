import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Cart } from '../interfaces/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Cart = {};
  total: number = 0;

  constructor() {}

  getProducts(): Cart {
    return this.products;
  }

  addProduct(product: Product): void {
    const productInCart = this.products[product.id] || { item: product };
    productInCart.amount = (productInCart.amount || 0) + 1;

    this.products[product.id] = productInCart;
    this.total += productInCart.item.price;
  }

  removeItem(removeId: number): void {
    if (this.products[removeId].amount > 1) {
      this.products[removeId].amount--;
      this.total -= this.products[removeId].item.price;
    } else {
      this.removeProduct(removeId);
    }
  }

  removeProduct(removeId: number): void {
    delete this.products[removeId];

    this.total = Object.values(this.products).reduce(
      (a, b) => a + b.amount * b.item.price,
      0
    );
  }

  getItemsAmount(): number {
    return Object.values(this.products).reduce((a, b) => a + b.amount, 0);
  }

  clearCart(): void {
    this.products = {};
    this.total = 0;
  }
}
