import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';

import { AlbumComponent } from './album/album.component';
import { AppComponent } from './app.component';
import { AsideListComponent } from './aside-list/aside-list.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { SearchComponent } from './shared/search/search.component';

import { TruncatePipe } from './pipes/truncate/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AsideListComponent,
    AlbumComponent,
    PhotoListComponent,
    TruncatePipe,
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
