import { Component, Input } from '@angular/core';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})

export class AlbumComponent {
  @Input() userId = '';

  constructor() { }

  ngOnChanges() {

  }

}
