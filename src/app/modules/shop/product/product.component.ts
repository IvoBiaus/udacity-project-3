import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { Router } from '@angular/router';

import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'shop-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @ViewChild(MatRipple) ripple!: MatRipple;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDetails() {
    this.router.navigateByUrl(`/product/${this.product.id}`);
  }

  launchRipple() {
    const rippleRef = this.ripple.launch({
      animation: {
        exitDuration: 500,
      },
      centered: true,
    });
    rippleRef.fadeOut();
  }
}
