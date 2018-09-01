import { Component, OnInit } from '@angular/core';
import { Bicycle } from '../models/bicycle.model';

@Component({
  selector: 'app-gear-list',
  templateUrl: './gear-list.component.html',
  styleUrls: ['./gear-list.component.css']
})
export class GearListComponent implements OnInit {
  activityLevels = ['UltraEndurance Racing', 'Touring', 'Bikepacking'];
  model = new Bicycle('Salsa', 'Cutthroat', true, 'Gravel', 'default');
  hasActivityLevelError:boolean = false;

  constructor() { }

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
