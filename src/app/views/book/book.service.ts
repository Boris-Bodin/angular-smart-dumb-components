import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book';

@Injectable({ providedIn: 'root' })
export class BookService {
  booksSubject: BehaviorSubject<Array<Book>> = new BehaviorSubject<Array<Book>>([]);

  getBooks() {
    return this.booksSubject.asObservable();
  }

  saveBook(book: Book) {
    const books = this.booksSubject.getValue();
    if (!book.id) {
      book.id = Math.floor(Math.random() * 100) + 1;
      books.push(book);
    } else {
      let oldBook = books.find((b) => b.id === book.id);
      if (oldBook) {
        Object.assign(oldBook, book);
      }
    }
    this.booksSubject.next(books);
  }
}
