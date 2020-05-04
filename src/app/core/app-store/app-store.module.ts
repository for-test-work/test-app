import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { NewsEffects } from './news.effects';
import { StoreModule } from '@ngrx/store';
import { newsReducer } from './news.reducer';
import { NewsServiceModule } from '../services/news-service/news-service.module';

@NgModule({
  imports: [
    StoreModule.forFeature('news', newsReducer),
    EffectsModule.forFeature([NewsEffects]),
    NewsServiceModule,
  ]
})
export class AppStoreModule {
}
