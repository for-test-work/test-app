import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { RoutingModule } from './routing.module';
import { NewsItemComponent } from './news-item/news-item.component';
import { AppStoreModule } from '../core/app-store/app-store.module';
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
    AppStoreModule
  ]
})
export class NewsModule {
}
