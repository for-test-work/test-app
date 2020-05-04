import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { LoadNews } from '../../core/app-store/news/news.actions';
import { NewsState } from '../../core/app-store/news/news.reducer';
import { News } from '../../core/interfaces/news';
import { BaseComponent } from '../../core/base-component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent extends BaseComponent implements OnInit {
  public news: News[] = [];
  private news$: Observable<News[]> = this.store.select(state => state.news);

  constructor(private store: Store<NewsState>) {
    super();
  }

  ngOnInit() {
    this.store.dispatch(new LoadNews());

    this.subs = this.news$.pipe(
      filter((data: News[]) => Boolean(data.length)),
    ).subscribe((data: News[]) => console.log('News', data));
  }

}
