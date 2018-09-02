import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Bicycle } from '../models/bicycle.model';

@Injectable()
export class GearListService {

  constructor() {}

  getBicycle() {
    const myBike = { brand: 'Salsa', bikeModel: 'Cutthroat', isActive: true, bicycleType: 'Mountain', activityLevel: 'Touring' };
    return myBike;
  }

  getActivityLevels() {
    const activityLevels = ['UltraEndurance Racing', 'Touring', 'Bikepacking'];
    return activityLevels;
  }

  getGearLists() {
    return GEARLISTS;
  }

  createBicycle(data) {
    console.log(data);
  }

  //getBicycles(): Observable<Bicycle> {
  //  return this.http.get<iBicycle[]>('https://localhost:44370/SampleData/GetBicycle').subscrbe(results => { this.bicycle = results }, error => console.error(error));
  //}
}

const GEARLISTS = [
  {
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
  },
  {
    id: 2,
    name: `Marks's Bikepacking Gear List`,
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
  },
  {
    id: 3,
    name: `Jim's Bikepacking Gear List`,
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
  },
  {
    id: 4,
    name: `Alyssa's Bikepacking Gear List`,
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
  },
  {
    id: 5,
    name: `Gareth's Bikepacking Gear List`,
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
  },
];
