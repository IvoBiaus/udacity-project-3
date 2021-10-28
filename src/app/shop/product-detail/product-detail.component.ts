import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'shop-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  private routeSub!: Subscription;
  product?: Product;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.productsService.getProduct(params['id']).subscribe((res) => {
        this.product = res;
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  addToCart(): void {
    this.cartService.addProduct(this.product!);
  }

  removeFromCart(): void {
    this.cartService.removeItem(this.product!.id);
  }

  getAmount(): number {
    return this.cartService.getProducts()[this.product!.id]?.amount || 0;
  }

  remove() {
    this.cartService.removeProduct(this.product!.id);
  }
}
