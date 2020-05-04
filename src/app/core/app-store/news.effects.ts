import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { NewsService } from '../services/news-service/news.service';
import { NewsActions } from './news.actions';
import { NewsLoadedSuccess } from './news.actions';
import { News } from '../interfaces/news';
import { of } from 'rxjs';
import { NewsLoadedError } from './news.actions';

@Injectable()
export class NewsEffects {

  loadNews$ = createEffect(() => this.actions$.pipe(
    ofType(NewsActions.LoadNews),
    mergeMap(() => this.newsService.getNews()
      .pipe(
        map((data: News[]) => (new NewsLoadedSuccess({ news: data }))),
          catchError(() => of(new NewsLoadedError())
        ))
    )
  ));

  constructor(
    private actions$: Actions,
    private newsService: NewsService
  ) {
  }
}
