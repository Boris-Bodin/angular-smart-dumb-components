import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { BookFormComponent } from './book-form.component';
import { BookTableComponent } from './book-table.component';
import { BookService } from './book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookTableComponent, BookFormComponent, CommonModule],
  template: `
    <ng-container *ngIf="$books | async as books">
      <app-book-table [books]="books" (edit)="onEdit($event)"/>
    </ng-container>
    <ng-container *ngIf="book">
      <app-book-form (submit)="onAdd($event)" (cancel)="onCancel()" [book]="book"/>
    </ng-container>
  `,
})
export class BookListComponent implements OnInit {
  $books: Observable<Array<Book>> | undefined;
  book: Book | undefined;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.$books = this.bookService.getBooks();
    this.book = new Book();
  }

  onAdd(book: Book) {
    this.bookService.saveBook(book);
    this.book = new Book();
  }

  onEdit(book: Book) {
    this.book = Object.assign(new Book(), book);
  }

  onCancel() {
    this.book = new Book();
  }
}
