import { Component, Input } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  providers: [ AlbumService ]
})

export class AlbumComponent {
  @Input() userId = '';
  albums: Object;
  selectAllAlbums = false;

  albumService: AlbumService;

  constructor(albumService: AlbumService) {
    this.albumService = albumService;
  }

  ngOnChanges() {
    this.albumService.getSpecificAlbums(this.userId).subscribe(
      response => this.albums = response,
      error => console.log(error)
    );
  }

  onSelectAll(event) {
    this.selectAllAlbums = event;
  }

}
