import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from './cart.service';
import { Product } from './product';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  template: `
    <h1>Product List</h1>
    <ng-container *ngIf="$products | async as products">
      <div *ngFor="let product of products">
        <app-product [product]="product" (addToCart)="addToCart($event)"/>
      </div>
    </ng-container>
    <button (click)="goBack()">Go Back</button>
  `,
})
export class ProductListComponent implements OnInit {
  $products: Observable<Array<Product>> | undefined;

  constructor(
    private readonly router: Router,
    private readonly productService: ProductService,
    private readonly cartService: CartService
  ) {}

  ngOnInit() {
    this.$products = this.productService.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
