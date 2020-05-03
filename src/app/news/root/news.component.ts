import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../core/services/news-service/news.service';
import { News } from '../../core/interfaces/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public news: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe((data: News[]) => this.news = data);
  }

}
