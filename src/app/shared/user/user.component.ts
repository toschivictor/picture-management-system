import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {
  @Input() userInfo : Object;
  @Input() userActive = false;
  @Output() onSelectedUser = new EventEmitter();

  onClick(event) {
    this.onSelectedUser.emit(event);
  }
}
