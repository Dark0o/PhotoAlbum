import { AfterViewInit, ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent implements OnInit, AfterViewInit {
  photos;
  index;
  @ViewChild('img') img: ElementRef;
  counter;

  constructor(public modalRef: MdbModalRef<ImageModalComponent>) {}

  ngOnInit(): void {
    console.log(this.photos);
    console.log(this.index);
    this.counter = this.index;
  }

  ngAfterViewInit() {
    console.log(this.img.nativeElement);
    this.img.nativeElement.src = this.photos[this.counter].url;
  }
  choosePrevious() {
    if (this.counter === 0) {
      this.counter = this.photos.length - 1;
    } else {
      this.counter--;
    }
    this.img.nativeElement.src = this.photos[this.counter].url;
  }
  chooseNext() {
    if (this.counter === this.photos.length - 1) {
      this.counter = 0;
    } else {
      this.counter++;
    }
    this.img.nativeElement.src = this.photos[this.counter].url;
  }
}
