import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Bicycle } from '../models/bicycle.model';
import { Subject } from 'rxjs/Rx';

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
    let subject = new Subject();
    setTimeout(() => { subject.next(GEARLISTS); subject.complete(); }, 10);
    return subject;
  }

  //getGearLists() {
  //  return GEARLISTS;
  //}

  getGearList(id: number) {
    return GEARLISTS.find(gl => gl.id === id);
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
    imageUrl: '../../../assets/images/monkey.JPG',
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
    name: `Mark's Bikepacking Gear List`,
    date: '9/2/2018',
    time: '8:35am',
    imageUrl: '../../../assets/images/monkey.JPG',
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
    imageUrl: '../../../assets/images/monkey.JPG',
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
    imageUrl: '../../../assets/images/monkey.JPG',
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
    imageUrl: '../../../assets/images/monkey.JPG',
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
