import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { RoutingModule } from './routing.module';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsStoreModule } from '../core/app-store/news/news-store.module';
import { NewsComponent } from './root/news.component';

@NgModule({
  declarations: [
    NewsComponent,
    NewsItemComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    MatCardModule,
    NewsStoreModule
  ]
})
export class NewsModule {
}
