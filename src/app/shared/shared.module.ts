import { NgModule } from '@angular/core';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { LoaderComponent } from './loader/loader.component';
import { SearchComponent } from './search/search.component';
import { SortButtonComponent } from './sort-button/sort-button.component';
import { UserComponent } from './user/user.component';

import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    CheckboxComponent,
    LoaderComponent,
    SearchComponent,
    SortButtonComponent,
    UserComponent,
  ],
  exports: [
    CheckboxComponent,
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
