import { Component, OnInit } from '@angular/core';
import { GearListService } from '../../services/gear-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gear-list-display',
  templateUrl: './gear-list-display.component.html',
  styleUrls: ['./gear-list-display.component.css']
})
export class GearListDisplayComponent implements OnInit {
  gearLists: any;

  constructor(private gearListService: GearListService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.gearListService.getGearLists().subscribe(gearLists => { this.gearLists = gearLists });
    this.gearLists = this.route.snapshot.data['gearLists'];
  }

  handleGearListClicked(data) {
    console.log('received: ', data);
  }

}
