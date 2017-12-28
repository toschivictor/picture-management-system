import { NgModule } from '@angular/core';

import { SearchComponent } from './search/search.component';
import { SortButtonComponent } from './sort-button/sort-button.component';
import { UserComponent } from './user/user.component';

import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    SearchComponent,
    SortButtonComponent,
    UserComponent,
  ],
  exports: [
    SearchComponent,
    SortButtonComponent,
    UserComponent,
  ],
  providers: [
    UserService,
  ]
})

export class SharedModule { }
