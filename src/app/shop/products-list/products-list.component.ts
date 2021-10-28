import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'shop-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    if (this.products.length === 0) {
      this.productsService.getProducts().subscribe((res) => {
        this.products = res;
      });
    }
  }
}
