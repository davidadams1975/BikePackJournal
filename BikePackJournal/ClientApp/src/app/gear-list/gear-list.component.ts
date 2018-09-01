import { Component, OnInit } from '@angular/core';
import { Bicycle } from '../models/bicycle.model';
import { GearListService } from '../services/gear-list.service';

@Component({
  selector: 'app-gear-list',
  templateUrl: './gear-list.component.html',
  styleUrls: ['./gear-list.component.css']
})
export class GearListComponent implements OnInit {
  activityLevels = ['UltraEndurance Racing', 'Touring', 'Bikepacking'];
  model = new Bicycle('Salsa', 'Cutthroat', true, 'Gravel', 'default');
  hasActivityLevelError:boolean = false;

  constructor(private gearListService: GearListService) { }

  ngOnInit() {
  }

  validateActivityLevel(value) {
    console.log('lang: ' + value);
    console.log(value);
    if (value === 'default') {
      this.hasActivityLevelError = true;
    } else {
      this.hasActivityLevelError = false;
    }
  }
}
