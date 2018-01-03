import { Component, Input } from '@angular/core';

@Component({
  selector: 'photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})

export class PhotoListComponent {
  @Input() albums: Array<Object>;

  currentAlbums = [];
  photos: any;
  isLoading = false;

  constructor() { }

  ngOnChanges() {
    this.setAlbumList(this.albums);
  }

  setAlbumList(albums) {
    if (albums) {

      if (this.currentAlbums.length > 0) {
        let news = [];

        console.log(this.currentAlbums, '----')

        albums.forEach(item => {
          news.push(item)

          const newItems = this.currentAlbums.map(curr => {
            if (curr.userId === item.userId && curr.albumId === item.albumId) {
              curr.checked = item.checked;
            }
            return curr;
          });

          return news = news.concat(newItems);
        });

        console.log(this.removeDuplicatesItem(news), 'xxx')
        return this.currentAlbums = this.removeDuplicatesItem(news);
      }

      return this.currentAlbums = albums;
    }
  }

  removeDuplicatesItem(arr) {
    const uniqueArray = arr.filter((elem, index, self) =>
      index == self.indexOf(elem)
    );

    return uniqueArray;
  }
}
