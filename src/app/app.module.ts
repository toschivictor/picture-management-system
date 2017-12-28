import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';

import { AlbumComponent } from './album/album.component';
import { AppComponent } from './app.component';
import { AsideListComponent } from './aside-list/aside-list.component';
import { SearchComponent } from './shared/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideListComponent,
    AlbumComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
