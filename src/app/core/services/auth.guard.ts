import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private simple = true;

  constructor(private router: Router) {

  }

  canActivate(): boolean {
    return this.isAuthenticated();
  }

  private isAuthenticated(): boolean {
    if (!this.simple) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
