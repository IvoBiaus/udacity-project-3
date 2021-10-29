import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'cart-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  constructor(private cartService: CartService) {}

  getProducts(): Product[] {
    return Object.values(this.cartService.getProducts()).map(
      (item) => item.item
    );
  }

  ngOnInit(): void {}
}
