import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})

export class CheckboxComponent {
  @Input() itemValue: string;
  @Input() labelValue: string;
  @Output() onChecked = new EventEmitter();

  onCheck(event) {
    this.onChecked.emit(event.srcElement.checked);
  }
}
