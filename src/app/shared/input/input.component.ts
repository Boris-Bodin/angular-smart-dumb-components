import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  template: `
    <label>{{ label }}</label>
    <input #input [type]="type" [value]="value" (change)="valueChange.emit(input.value)"/>
  `,
})
export class InputComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<any>();
}
