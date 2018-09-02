import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component'
//import { userRoutes } from './user-routes'


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'profile', component: ProfileComponent }
    ]),
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [
  ]
})
export class UserModule {

}
