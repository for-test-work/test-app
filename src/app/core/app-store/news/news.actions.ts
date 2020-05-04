import { Action } from '@ngrx/store';
import { News } from '../../interfaces/news';

export enum NewsActions {
  LoadNews = '[News Page], Load News',
  NewsLoadedSuccess = '[News Page], News Loaded Success',
  NewsLoadedError = '[News Page], News Loaded Error',
  Logout = '[Logout]'
}

export class LoadNews implements Action {
  readonly type = NewsActions.LoadNews;
}

export class NewsLoadedSuccess implements Action {
  readonly type = NewsActions.NewsLoadedSuccess;

  constructor(public payload: { news: News [] }) {
  }
}

export class NewsLoadedError implements Action {
  readonly type = NewsActions.NewsLoadedError;
}

export class ClearStore implements Action {
  readonly type = NewsActions.Logout;
}

export type NewsUnion = LoadNews | NewsLoadedSuccess | NewsLoadedError | ClearStore;
