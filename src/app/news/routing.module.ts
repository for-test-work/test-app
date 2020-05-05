import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { NewsComponent } from './root/news.component';
import { NewsResolverService } from '../core/services/resolver.service';

const routes: Routes = [
  {
    path: '', component: NewsComponent,
    resolve: { data: NewsResolverService }
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
