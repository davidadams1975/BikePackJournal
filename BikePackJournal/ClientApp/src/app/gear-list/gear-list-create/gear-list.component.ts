import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Bicycle } from '../../models/bicycle.model';
import { GearListService } from '../../services/gear-list.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gear-list',
  templateUrl: './gear-list.component.html',
  styleUrls: ['./gear-list.component.css']
})
export class GearListComponent implements OnInit {
  activityLevels;
  model;
  hasActivityLevelError: boolean = false;
  isDirty: boolean = true;


  constructor(private gearListService: GearListService, private router: Router) { }

  ngOnInit() {
    this.model = this.gearListService.getBicycle();
    this.activityLevels = this.gearListService.getActivityLevels();
  }

  submitBicycleForm(form: NgForm) {
    this.validateActivityLevel(this.model.activityLevel);
    if (this.hasActivityLevelError) {
      return;
    }
    this.gearListService.createBicycle(this.model)
      //.subscribe(
      //  data => console.log('success: ', data),
      //  error => console.log('error', error)
      //);
  }

  cancel() {
    this.router.navigate(['/']);
  }

  validateActivityLevel(value) {
    if (value === 'default') {
      this.hasActivityLevelError = true;
    } else {
      this.hasActivityLevelError = false;
    }
  }
}
