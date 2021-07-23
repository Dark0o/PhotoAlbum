import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class UsersService {
  private signedUpUsers = [
    {
      userName: 'laza',
      password: 'lazic',
    },
    {
      userName: 'pera',
      password: 'peric',
    },
    {
      userName: 'jova',
      password: 'jovic',
    },
  ];

  constructor(private http: HttpClient) {}

  userExists(username: string, password: string) {
    let existingUser = this.signedUpUsers.filter(
      (u) => u.userName === username && u.password === password
    );
    if (existingUser.length === 1) {
      return true;
    }
    return false;
  }

  getAllUsers(): Observable<any> {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }
  getUserById(id): Observable<any> {
    return this.http.get(`http://jsonplaceholder.typicode.com/users/${id}`);
  }
  getFirstPhotoByAlbumID(id): Observable<any> {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
    );
  }
}
