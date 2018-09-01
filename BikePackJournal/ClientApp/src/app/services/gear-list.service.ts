import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Bicycle } from '../models/bicycle.model';

@Injectable()
export class GearListService {

  constructor(private http: Http) {

  }

  postBicycleForm(bicycle: Bicycle) {
    console.log('posting bicycle: ', bicycle);
  }
}
