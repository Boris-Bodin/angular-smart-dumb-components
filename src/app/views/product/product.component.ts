import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  standalone: true,
  template: `
    <div>
      <h2>{{ product?.name }}</h2>
      <p>{{ product?.description }}</p>
      <button (click)="addToCart.emit(product)">Add to Cart</button>
    </div>
  `,
})
export class ProductComponent {
  @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter<Product>();
}
