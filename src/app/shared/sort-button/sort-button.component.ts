import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.css']
})

export class SortButtonComponent {
  @Output() clicked = new EventEmitter();

  onClick() {
    this.clicked.emit(true);
  }
}
