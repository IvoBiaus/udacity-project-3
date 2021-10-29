import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'shop-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  constructor(private router: Router) {}

  goToDetails() {
    this.router.navigateByUrl(`/product/${this.product.id}`);
  }

  ngOnInit(): void {}
}
