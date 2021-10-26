import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

interface Cart {
  [key: string]: { item: Product; amount: number };
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Cart = {};

  constructor() {}

  getProducts(): Cart {
    return this.products;
  }

  addProduct(product: Product): Cart {
    const productInCart = this.products[product.id] || { item: product };
    productInCart.amount = (productInCart.amount || 0) + 1;

    this.products[product.id] = productInCart;
    return this.products;
  }

  removeItem(removeId: number): Cart {
    if (this.products[removeId].amount > 1) {
      this.products[removeId].amount--;
    } else {
      this.removeProduct(removeId);
    }
    return this.products;
  }

  removeProduct(removeId: number): Cart {
    delete this.products[removeId];
    return this.products;
  }

  clearCart(): Cart {
    this.products = {};
    return this.products;
  }
}
