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

  createBicycle(data) {
    console.log(data);
  }

  //getBicycles(): Observable<Bicycle> {
  //  return this.http.get<iBicycle[]>('https://localhost:44370/SampleData/GetBicycle').subscrbe(results => { this.bicycle = results }, error => console.error(error));
  //}
}
