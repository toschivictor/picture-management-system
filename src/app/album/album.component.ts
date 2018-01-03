import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  providers: [AlbumService]
})

export class AlbumComponent {
  @Input() userId = '';
  @Output() selectedAlbums = new EventEmitter();

  albums: Object;
  selectAllAlbums = false;
  isLoading = false;

  albumService: AlbumService;

  constructor(albumService: AlbumService) {
    this.albumService = albumService;
  }

  ngOnChanges() {
    this.isLoading = !this.isLoading;

    this.albumService.getSpecificAlbums(this.userId).subscribe(
      response => {
        this.isLoading = !this.isLoading;
        this.albums = response
      },
      error => console.log(error)
    );

    this.selectAllAlbums = false;
  }

  onSelectAllAlbums(checked) {
    this.selectAllAlbums = checked;

    const ids = [];

    for (const prop in this.albums) {
      ids.push(
        {
          userId: this.albums[prop].userId,
          albumId: this.albums[prop].id,
          checked
        }
      );
    }

    return this.selectedAlbums.emit(ids);
  }

  onSelectAlbum(status, userId, albumId) {
    return this.selectedAlbums.emit([
      {
        userId: userId,
        albumId: albumId,
        checked: status
      }
    ]);
  }

}
