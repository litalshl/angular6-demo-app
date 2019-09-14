import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HttpService {

  constructor(private http: HttpClient) { }

  myMethod() {
    return console.log('Hey, what is up!');
  }

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }

}
