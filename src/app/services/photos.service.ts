import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class PhotosService {
  constructor(private http: HttpClient) {}

  getFirstPhotoByAlbumID(id): Observable<any> {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
    );
  }
  getPhotosByAlbumId(id): Observable<any> {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/albums/${id}/photos`
    );
  }
}
