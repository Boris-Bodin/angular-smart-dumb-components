import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProductListComponent } from './product/product-list.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <app-product-list></app-product-list>
  `,
})
export class App {}

bootstrapApplication(App);
