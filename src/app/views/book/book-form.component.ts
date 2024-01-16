import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from './book';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <form *ngIf="book">
      <div>
        <label for="title">Title:</label>
        <input type="text" name="title" [(ngModel)]="book.title" required/>
      </div>
      <div>
        <label for="author">Author:</label>
        <input type="text" name="author" [(ngModel)]="book.author" required/>
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea name="description" [(ngModel)]="book.description" required></textarea>
      </div>
      <div>
        <button type="button" (click)="onSubmit()">Add Book</button>
        <button type="button" (click)="onCancel()">Cancel</button>
      </div>
    </form>
  `,
})
export class BookFormComponent {
  @Input() book: Book | undefined;
  @Output() submit = new EventEmitter<Book>();
  @Output() cancel = new EventEmitter<void>();

  onSubmit() {
    this.submit.emit(this.book);
  }

  onCancel() {
    this.cancel.emit();
  }
}
