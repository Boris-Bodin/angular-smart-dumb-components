import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let book of books">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.description }}</td>
          <td>
            <button (click)="edit.emit(book)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
})
export class BookTableComponent {
  @Input() books: Array<Book> = [];
  @Output() edit = new EventEmitter<Book>();
}
