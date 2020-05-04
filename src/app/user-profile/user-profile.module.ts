import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { RoutingModule } from './routing.module';
import { ProfileStoreModule } from '../core/app-store/profile/profile-store.module';
import { UserProfileComponent } from './root/user-profile.component';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    RoutingModule,
    MatCardModule,
    ProfileStoreModule
  ]
})
export class UserProfileModule {
}
