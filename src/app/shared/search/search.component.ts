import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  @Input() placeholderText = 'Search for users';
  @Output() typedWord = new EventEmitter();

  onChange(event) {
    setTimeout(() => this.typedWord.emit(event.target.value), 800);
  }
}
