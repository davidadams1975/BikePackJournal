import { Injectable } from '@angular/core';
import { Resolve, CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { GearListService } from './gear-list.service';
import { map } from 'rxjs/operators';

@Injectable()
export class RouteActivatorService implements CanActivate, Resolve<any> {

  constructor(private gearListService: GearListService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const gearListExists = !!this.gearListService.getGearList(+route.params['id']);

    if (!gearListExists) {
      this.router.navigate(['error404']);
    }

    return gearListExists;
  }

  resolve() {
    return this.gearListService.getGearLists().pipe(map(gearLists => gearLists));
  }

}
