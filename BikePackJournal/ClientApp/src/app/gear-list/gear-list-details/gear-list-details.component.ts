import { Component, OnInit } from '@angular/core';
import { GearListService } from '../../services/gear-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './gear-list-details.component.html',
  styleUrls: ['./gear-list-details.component.css']
})
export class GearListDetailsComponent implements OnInit {
  gearList: any;
  constructor(private gearListService: GearListService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.gearList = this.gearListService.getGearList(+this.route.snapshot.params['id']);
  }

}
