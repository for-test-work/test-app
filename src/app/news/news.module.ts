import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './root/news.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class NewsModule {
}
