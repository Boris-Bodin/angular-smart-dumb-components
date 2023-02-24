import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingNames } from '@core/app-routing.names';
import { InputComponent } from '@shared/input/input.component';
import { BookListComponent } from '@views/book/book-list.component';
import { ProductListComponent } from '@views/product/product-list.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    ProductListComponent,
    InputComponent,
    BookListComponent,
    RouterModule,
  ],
  template: `
    <h1>Application Demonstration Smart/Dumb Component</h1>

    <app-input [label]="'Dumb Component Label : '" [value]="value" (valueChange)="value = $event"/>&nbsp;
    <span>Value : {{value}}</span>
    <br/>
    <a [routerLink]="productCmd">Show products components</a>&nbsp;
    <a [routerLink]="bookCmd">Show books components</a>
    <br/>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  protected value = '';

  protected bookCmd = [AppRoutingNames.BOOK];
  protected productCmd = [AppRoutingNames.PRODUCT];
}
