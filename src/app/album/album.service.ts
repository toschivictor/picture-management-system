import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment as api } from '../../environments/environment';

@Injectable()
export class AlbumService {
  headers: Headers;
  http: Http;

  constructor(http: Http) {
    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  getAllAlbums() {
    return this.http.get(api.albums, { headers: this.headers })
      .map(response => response.json());
  }

  getSpecificAlbums(userId) {
    return this.http.get(`${api.albums}?userId=${userId}`, { headers: this.headers })
      .map(response => response.json());
  }

}
