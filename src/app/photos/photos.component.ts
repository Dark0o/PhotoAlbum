import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { Router } from '@angular/router';
import { AlbumsService } from '../services/albums.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  albumID;
  photos;
  constructor(
    private photosService: PhotosService,
    private albumsService: AlbumsService,
    private router: Router
  ) {
    this.albumID = this.router.getCurrentNavigation().extras.state.id;
    console.log(this.albumID);
  }

  ngOnInit(): void {
    this.photosService.getPhotosByAlbumId(this.albumID).subscribe((photos) => {
      this.photos = photos.map((photo) => {
        this.albumsService.getAlbumById(this.albumID).subscribe((album) => {
          photo.albumTitle = album.title;
        });
        return photo;
      });
      console.log(photos);
    });
  }
}
