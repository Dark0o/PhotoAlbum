import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  albumId;
  searchText;
  status = false;
  @ViewChild('cardsContainer') card: ElementRef;
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
  urlReceived(url) {
    console.log(url);
    this.albumId = this.albums.filter((a) => a.url === url);
    console.log(this.albumId[0].id);

    this.router.navigate([`albums/${this.albumId[0].id}/photos`], {
      state: { id: this.albumId[0].id },
    });
  }
  deleteItem(url) {
    this.albums = this.albums.filter((a) => a.url !== url);
  }
}
