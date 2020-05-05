import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private readonly newsUrl = 'assets/news.json';

  constructor(private http: HttpClient) { }

  public getNews() {
    return this.http.get(this.newsUrl).pipe(
      delay(200)
    );
  }
}
