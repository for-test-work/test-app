import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private readonly profileUrl = 'assets/profile.json';

  constructor(private http: HttpClient) { }

  public getProfile() {
    return this.http.get(this.profileUrl).pipe(
      delay(200)
    );
  }
}
