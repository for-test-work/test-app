import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/root/home.component';
import { PreloadingStrategyService } from './core/services/preloading-strategy.service';
import { AuthGuard } from './core/services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'login',
    loadChildren: () => import('./login').then(m => m.LoginModule),
    data: { preload: true }
  },
  {
    path: 'news',
    loadChildren: () => import('./news').then(m => m.NewsModule),
    canActivate: [AuthGuard],
    data: { preload: true }
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile').then(m => m.UserProfileModule),
    canActivate: [AuthGuard],
    data: { preload: true }
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { preloadingStrategy: PreloadingStrategyService }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
