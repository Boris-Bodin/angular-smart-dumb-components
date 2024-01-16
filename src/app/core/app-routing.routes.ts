import { Routes } from '@angular/router';
import { BookListComponent } from '@views/book/book-list.component';
import { ProductListComponent } from '@views/product/product-list.component';
import { AppRoutingNames } from './app-routing.names';

export const AppRoutingRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutingNames.BOOK,
  },
  {
    path: AppRoutingNames.BOOK,
    component: BookListComponent,
  },
  {
    path: AppRoutingNames.PRODUCT,
    component: ProductListComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
