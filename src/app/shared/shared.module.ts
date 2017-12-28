import { NgModule } from '@angular/core';

import { LoaderComponent } from './loader/loader.component';
import { SearchComponent } from './search/search.component';
import { SortButtonComponent } from './sort-button/sort-button.component';
import { UserComponent } from './user/user.component';

import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    LoaderComponent,
    SearchComponent,
    SortButtonComponent,
    UserComponent,
  ],
  exports: [
    LoaderComponent,
    SearchComponent,
    SortButtonComponent,
    UserComponent,
  ],
  providers: [
    UserService,
  ]
})

export class SharedModule { }
