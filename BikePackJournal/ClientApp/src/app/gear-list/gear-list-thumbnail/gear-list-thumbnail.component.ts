import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gear-list-thumbnail',
  templateUrl: './gear-list-thumbnail.component.html',
  styleUrls: ['./gear-list-thumbnail.component.css']
})
export class GearListThumbnailComponent implements OnInit {
  @Input() gearList: any;
  @Output() gearListClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  gearListThumbnailClick() {
    this.gearListClick.emit(this.gearList.name);
  }
}
