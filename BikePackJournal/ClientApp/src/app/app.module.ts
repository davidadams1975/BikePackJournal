import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { GearListComponent } from './gear-list/gear-list-create/gear-list.component';
import { BicycleComponent } from './gear-list/gear-components/bicycle/bicycle.component';
import { SleepSetupComponent } from './gear-list/gear-components/sleep-setup/sleep-setup.component';
import { GearListService } from './services/gear-list.service';
import { GearListDisplayComponent } from './gear-list/gear-list-display/gear-list-display.component';
import { GearListThumbnailComponent } from './gear-list/gear-list-thumbnail/gear-list-thumbnail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GearListDetailsComponent } from './gear-list/gear-list-details/gear-list-details.component';
import { Error404Component } from './errors/error404/error404.component';
import { RouteActivatorService } from './services/route-activator.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    GearListComponent,
    BicycleComponent,
    SleepSetupComponent,
    GearListDisplayComponent,
    GearListThumbnailComponent,
    NavBarComponent,
    GearListDetailsComponent,
    Error404Component
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'gear-list/create', component: GearListComponent, canDeactivate: ['canDeactivateCreateGearList'] },
      { path: 'gear-list/:id', component: GearListDetailsComponent, canActivate: [RouteActivatorService] },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'error404', component: Error404Component },
      { path: '', component: HomeComponent, pathMatch: 'full', resolve: { gearLists: RouteActivatorService } },
      { path: 'user', loadChildren: './users/user.module#UserModule' }
    ])
  ],
  providers: [
    GearListService,
    RouteActivatorService,
    {
      provide: 'canDeactivateCreateGearList',
      useValue: checkDirtyState
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: GearListComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved.  Do you really want to leave this page?');
  }
  return true;
}
