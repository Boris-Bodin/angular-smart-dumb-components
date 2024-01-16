import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProductListComponent } from './product/product-list.component';
import { InputComponent } from './input/input.component';
import { BookListComponent } from './book/book-list.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [ProductListComponent, InputComponent, BookListComponent],
  template: `
    <app-product-list/>
    <br/>
    <br/>
    <app-input [label]="'Label : '" [value]="value" (valueChange)="value = $event"/>
    <br/>
    <span>Value : {{value}}</span>
    <br/>
    <br/>
    <br/>
    <app-book-list/>
  `,
})
export class App {
  value = '';
}

bootstrapApplication(App);
