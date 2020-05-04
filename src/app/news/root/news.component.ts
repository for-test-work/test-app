import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { LoadNews } from '../../core/app-store/news.actions';
import { NewsState } from '../../core/app-store/news.reducer';
import { News } from '../../core/interfaces/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public news: News[] = [];
  private news$: Observable<News[]> = this.store.select(state => state.news);

  constructor(private store: Store<NewsState>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadNews());

    this.news$.pipe(
      filter((data: any) => Boolean(data.news.length)),
      map(data => data.news)
    ).subscribe((data: News[]) => this.news = data);
  }

}
