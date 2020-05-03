import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { News } from '../../core/interfaces/news';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsItemComponent {
  @Input() item: News;

}
