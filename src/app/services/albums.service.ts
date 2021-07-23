import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AlbumsService {
  constructor(private http: HttpClient) {}

  getAllAlbums(): Observable<any> {
    return this.http.get('http://jsonplaceholder.typicode.com/albums');
  }
}
