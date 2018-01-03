import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  userId: string;
  albums: Array<Object>;

  onUserIdSelected(event) {
    this.userId = event;
  }

  onAlbumSelected(event) {
    this.albums = event;
  }
}
