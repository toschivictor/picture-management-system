import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment as api } from '../../../environments/environment';

@Injectable()
export class UserService {
  headers: Headers;
  http: Http;

  constructor(http: Http) {
    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  getUsers() {
    return this.http.get(api.users, { headers: this.headers })
      .map(response => response.json());
  }
}
