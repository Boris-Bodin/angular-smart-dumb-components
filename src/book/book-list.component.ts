import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';
import { BookTableComponent } from './book-table.component';
import { BookFormComponent } from './book-form.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookTableComponent, BookFormComponent, CommonModule],
  template: `
    <app-book-table [books]="$books | async" (edit)="onEdit($event)"/>
    <app-book-form (submit)="onAdd($event)" (cancel)="onCancel()" [book]="book"/>
  `,
})
export class BookListComponent implements OnInit {
  $books: Observable<Array<Book>>;
  book: Book;

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
