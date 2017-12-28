import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { environment as api } from '../../../environments/environment';

@Injectable()
export class UserService {
  headers: Headers;
  http: Http;

  constructor() {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  getUsers() {
    return this.http.get(api.users, { headers: this.headers });
  }
}
