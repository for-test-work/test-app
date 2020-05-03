import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './root/user-profile.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class UserProfileModule {
}
