import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productsList: Product[] = [];

  constructor() {}

  getProducts(): Product[] {
    return this.productsList;
  }

  addProduct(product: Product): Product[] {
    this.productsList.push(product);
    return this.productsList;
  }

  removeProduct(removeId: number): Product[] {
    this.productsList = this.productsList.filter(
      (item) => item.id !== removeId
    );
    return this.productsList;
  }

  clearCart(): Product[] {
    this.productsList = [];
    return this.productsList;
  }
}
