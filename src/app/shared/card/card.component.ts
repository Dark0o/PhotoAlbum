import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title;
  @Input() createdBy;
  @Input() url;
  @Output() imageSelected = new EventEmitter();
  @Output() deletedItem = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onImageSelected(imgUrl) {
    this.imageSelected.emit(imgUrl);
    console.log('clicked');
  }
  onItemDeleted(url) {
    this.deletedItem.emit(url);
    console.log('delete clicked');
  }
}
