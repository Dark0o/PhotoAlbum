import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent implements OnInit {
  imgUrl: string;

  constructor(public modalRef: MdbModalRef<ImageModalComponent>) {}

  ngOnInit(): void {
    console.log(this.imgUrl);
  }
}
