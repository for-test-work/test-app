import { Injectable } from '@angular/core';
import { PreloadingStrategy } from '@angular/router';
import { Route } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

interface RouteData {
  preload?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PreloadingStrategyService implements PreloadingStrategy {
  private modules: string[] = [];

  constructor() {
  }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    const data: RouteData = route.data || null;
    if (data && data.preload) {
      this.modules.push(route.path);

      return fn();
    }

    return of(null);
  }
}
