import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Auth } from '../interfaces/auth';
import { Store } from '@ngrx/store';
import { ProfileState } from '../app-store/profile/profile.reducer';
import { LoadProfile, Logout } from '../app-store/profile/profile.actions';
import { ClearStore } from '../app-store/news/news.actions';
import { NewsState } from '../app-store/news/news.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly userName = 'Admin';
  private readonly password = '12345';

  public isAuthorized$ = new Subject<boolean>();

  constructor(private profileStore: Store<ProfileState>,
              private newsStore: Store<NewsState>) {
  }

  public login(user: Auth): Observable<boolean> {
    if (user && (user.userName === this.userName && user.password === this.password)) {
      localStorage.setItem('isAuthorized', JSON.stringify(true));
      this.isAuthorized$.next(true);
      this.profileStore.dispatch(new LoadProfile());
      return of(true).pipe(
        delay(400)
      );
    }

    localStorage.setItem('key', JSON.stringify(false));
    this.isAuthorized$.next(false);
    return throwError('Username or password is incorrect!').pipe(
      delay(400)
    );
  }

  public logout() {
    this.isAuthorized$.next(false);
    localStorage.setItem('isAuthorized', JSON.stringify(false));
    this.newsStore.dispatch(new ClearStore());
    this.profileStore.dispatch(new Logout());
  }
}
