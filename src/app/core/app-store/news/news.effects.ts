import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { NewsService } from '../../services/news.service';
import { NewsActions, NewsLoadedSuccess, NewsLoadedError } from './news.actions';
import { News } from '../../interfaces/news';

@Injectable()
export class NewsEffects {

  loadNews$ = createEffect(() => this.actions$.pipe(
    ofType(NewsActions.LoadNews),
    mergeMap(() => this.newsService.getNews()
      .pipe(
        map((data: News[]) => (new NewsLoadedSuccess(data))),
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
