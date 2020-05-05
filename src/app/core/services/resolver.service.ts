import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NewsState } from '../app-store/news/news.reducer';
import { LoadNews } from '../app-store/news/news.actions';
import { ProfileState } from '../app-store/profile/profile.reducer';
import { LoadProfile } from '../app-store/profile/profile.actions';

@Injectable({
  providedIn: 'root'
})
export class NewsResolverService implements Resolve<void> {

  constructor(private store: Store<NewsState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    this.store.dispatch(new LoadNews());
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<void> {

  constructor(private store: Store<ProfileState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    this.store.dispatch(new LoadProfile());
  }
}
