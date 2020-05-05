import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { UserProfileComponent } from './root/user-profile.component';
import { ProfileResolverService } from '../core/services/resolver.service';

const routes: Routes = [
  {
    path: '', component: UserProfileComponent,
    resolve: { data: ProfileResolverService }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
