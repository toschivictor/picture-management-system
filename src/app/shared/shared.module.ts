import { NgModule } from '@angular/core';

import { SearchComponent } from './search/search.component';
import { SortButtonComponent } from './sort-button/sort-button.component';

@NgModule({
  declarations: [
    SearchComponent,
    SortButtonComponent
  ],
  exports: [
    SearchComponent,
    SortButtonComponent
  ]
})

export class SharedModule { }
