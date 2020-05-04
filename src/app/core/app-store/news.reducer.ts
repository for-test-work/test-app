import { News } from '../interfaces/news';
import { NewsUnion } from './news.actions';
import { NewsActions } from './news.actions';

export interface NewsState {
  news: News[];
}

const initialState: NewsState = {
  news: []
};

export function newsReducer(state = initialState, action: NewsUnion) {
  switch (action.type) {
    case NewsActions.NewsLoadedSuccess:
      return {
        ...state,
        news: action.payload.news
      };
    case NewsActions.NewsLoadedError:
      return {
        ...state,
        news: []
      };
    default:
      return state;
  }
}
