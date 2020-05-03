import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { NewsServiceModule } from '../core/services/news-service/news-service.module';
import { NewsComponent } from './root/news.component';
import { MatCardModule } from '@angular/material';
import { NewsItemComponent } from './news-item/news-item.component';

@NgModule({
  declarations: [
    NewsComponent,
    NewsItemComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    NewsServiceModule,
    MatCardModule
  ]
})
export class NewsModule {
}
