import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'aside-list',
  templateUrl: './aside-list.component.html',
  styleUrls: ['./aside-list.component.scss']
})

export class AsideListComponent implements OnInit {
  @Input() headerTitle: string;
  @Output() parentData = new EventEmitter();

  userService: UserService;

  allUsersData: Object;
  currentUsersData: any;
  userId: any;

  isLoading = true;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      response => {
        this.isLoading = false;
        this.currentUsersData = response;
        this.allUsersData = response;
      },
      error => console.log(error)
    );
  }

  onSearch(event) {
    const users = this.transformObjectToArray(this.allUsersData);

    this.currentUsersData = users.filter(curr =>
      curr.name.toLowerCase().indexOf(event.toLowerCase()) > -1
      || curr.username.toLowerCase().indexOf(event.toLowerCase()) > -1
    );

    return this.currentUsersData;
  }

  transformObjectToArray(obj) {
    const newArray = [];

    Object.keys(obj).map(
      key => newArray.push(obj[key])
    );

    return newArray;
  }

  onUserSelected(event) {
    this.userId = event;
    this.parentData.emit(event);
  }
}
