import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'cart-cart-screen',
  templateUrl: './cart-screen.component.html',
  styleUrls: ['./cart-screen.component.scss'],
})
export class CartScreenComponent implements OnInit {
  constructor(private cartService: CartService) {}

  isEmpty(): boolean {
    return this.cartService.getItemsAmount() === 0;
  }

  getTotal(): number {
    return this.cartService.total;
  }

  ngOnInit(): void {}
}
