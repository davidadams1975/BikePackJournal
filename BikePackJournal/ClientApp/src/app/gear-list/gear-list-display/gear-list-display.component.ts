import { Component, OnInit } from '@angular/core';
import { GearListService } from '../../services/gear-list.service';

@Component({
  selector: 'app-gear-list-display',
  templateUrl: './gear-list-display.component.html',
  styleUrls: ['./gear-list-display.component.css']
})
export class GearListDisplayComponent implements OnInit {
  gearLists: any[];
  
  constructor(private gearListService: GearListService) { }

  ngOnInit() {
    this.gearLists = this.gearListService.getGearLists();
  }

  handleGearListClicked(data) {
    console.log('received: ', data);
  }

}
