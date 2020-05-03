import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Auth } from '../interfaces/auth';
import { userName, password } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly userName = userName;
  private readonly password = password;

  constructor() {
  }

  public login(user: Auth): Observable<boolean> {
    if (user && (user.userName === this.userName && user.password === this.password)) {
      localStorage.setItem('simple', JSON.stringify(true));
      return of(true).pipe(
        delay(400)
      );
    }

    localStorage.setItem('key', JSON.stringify(false));
    return throwError('Username or password is incorrect!').pipe(
      delay(400)
    );
  }
}
