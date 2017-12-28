import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'aside-list',
  templateUrl: './aside-list.component.html',
  styleUrls: ['./aside-list.component.scss']
})

export class AsideListComponent implements OnInit {
  @Input() headerTitle: string;

  userService: UserService;

  usersData: Object;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      response => this.usersData = response,
      error => console.log(error)
    );
  }

}
