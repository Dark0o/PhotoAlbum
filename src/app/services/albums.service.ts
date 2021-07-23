import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AlbumsService {
  constructor(private http: HttpClient) {}

  /* uploadBigImage(file): Observable<any> {
    const fd = new FormData();
    fd.append('image', file);
    console.log(file);
    return this.http.post(
      'https://api.mozlike.com/v1.0/upload?uploadApiKey=mozlike123&path=tipaDareBig',
      fd,
      {
        reportProgress: true,
        observe: 'events',
      }
    );
  } */

  getAllAlbums(): Observable<any> {
    return this.http.get('http://jsonplaceholder.typicode.com/albums');
  }
}
