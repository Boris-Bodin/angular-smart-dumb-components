import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts() {
    return of([
      { name: 'Product1', description: 'a bus' },
      { name: 'Product2', description: 'a car' },
    ]);
  }
}
