import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { NewsEffects } from './news.effects';
import { StoreModule } from '@ngrx/store';
import { newsReducer } from './news.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('news', newsReducer),
    EffectsModule.forFeature([NewsEffects]),
  ]
})
export class NewsStoreModule {
}
