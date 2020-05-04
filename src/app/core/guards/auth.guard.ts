import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isAuthorized: boolean;

  constructor(private router: Router,
              private auth: AuthService) {
  }

  canActivate(): boolean {
    return this.isAuthenticated();
  }

  private isAuthenticated(): boolean {
    const key = JSON.parse(localStorage.getItem('isAuthorized')) || false;
    if (!key) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
