import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gear-list-display',
  templateUrl: './gear-list-display.component.html',
  styleUrls: ['./gear-list-display.component.css']
})
export class GearListDisplayComponent implements OnInit {
  gearList = {
    id: 1,
    name: `David's Bikepacking Gear List`,
    date: '9/2/2018',
    time: '8:35am',
    imageUrl: '/assets/images/monkey.jpg',
    bikeBrand: 'Salsa',
    bikeModel: 'Cutthroat',
    location: {
      address: '1456 S. Welch Cir',
      city: 'Lakewood',
      state: 'CO',
      zip: '80228'
    }

  }

  constructor() { }

  ngOnInit() {
  }

  handleGearListClicked(data) {
    console.log('received: ', data);
  }

}
