import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'cart-success-screen',
  templateUrl: './success-screen.component.html',
  styleUrls: ['./success-screen.component.scss'],
})
export class SuccessScreenComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.clearCart();
  }
}
