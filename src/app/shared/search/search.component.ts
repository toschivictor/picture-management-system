import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  @Input() placeholderText = 'Search for users';
  @Output() onTypedWord = new EventEmitter();

  onChange(event) {
    setTimeout(() => this.onTypedWord.emit(event.target.value), 800);
  }
}
