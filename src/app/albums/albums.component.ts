import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { UsersService } from '../services/users.service';
import { PhotosService } from '../services/photos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  albums;

  constructor(
    private albumsService: AlbumsService,
    private usersService: UsersService,
    private photosService: PhotosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.albumsService.getAllAlbums().subscribe((albums) => {
      this.albums = albums.map((album) => {
        this.usersService.getUserById(album.userId).subscribe((user) => {
          album.createdBy = user.name;
        });
        this.photosService
          .getFirstPhotoByAlbumID(album.id)
          .subscribe((photos) => {
            album.url = photos[0].thumbnailUrl;
            // console.log(photo);
            //console.log(album.id);
          });

        return album;
      });
      console.log(this.albums);
    });
  }
  urlReceived(event) {
    console.log(event);
    this.router.navigate(['photos']);
  }
}
