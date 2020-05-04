import { News } from '../../interfaces/news';
import { NewsActions, NewsUnion } from './news.actions';

export interface NewsState {
  news: News[];
}

export function newsReducer(state = [], action: NewsUnion) {
  switch (action.type) {
    case NewsActions.NewsLoadedSuccess:
      return [
        ...state,
        ...action.payload
      ];
    case NewsActions.NewsLoadedError:
      return state;
    case NewsActions.Logout:
      return [];
    default:
      return state;
  }
}
