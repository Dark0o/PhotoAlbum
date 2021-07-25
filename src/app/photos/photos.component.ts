import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../services/albums.service';
import { ImageModalComponent } from '../modals/image-modal/image-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  albumID;
  photos;
  albumTitle;
  modalRef: MdbModalRef<ImageModalComponent>;
  constructor(
    private photosService: PhotosService,
    private albumsService: AlbumsService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: MdbModalService
  ) {
    //this.albumID = this.router.getCurrentNavigation().extras.state.id;
    console.log(this.albumID);
  }
  openModal() {
    this.modalRef = this.modalService.open(ImageModalComponent);
  }

  ngOnInit(): void {
    this.albumID = this.route.snapshot.params['id'];
    console.log(this.albumID);
    this.photosService.getPhotosByAlbumId(this.albumID).subscribe((photos) => {
      this.photos = photos;
      this.albumsService.getAlbumById(this.albumID).subscribe((album) => {
        this.albumTitle = album.title;
      });
      console.log(photos);
    });
  }
}
