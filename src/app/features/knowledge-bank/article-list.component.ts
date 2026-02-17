import { Component, inject } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {LoggerService} from '../../core/services/logger.service';
import {ArticleService} from '../../core/services/article.service';
import {ArticleItemComponent} from './article-item.component';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ScrollingModule, ArticleItemComponent],
  template: `
    <cdk-virtual-scroll-viewport
      itemSize="60"
      class="h-full w-full">

      <app-article-item
        *cdkVirtualFor="let article of articles(); trackBy: trackByIndex"
        [article]="article">
      </app-article-item>

    </cdk-virtual-scroll-viewport>
  `
})
export class ArticleListComponent {
  private articleService = inject(ArticleService);
  private logger = inject(LoggerService);

  articles = this.articleService.articles;

  trackByIndex = (_: number, article: any) => article.index;
  constructor() {
    this.logger.info('ArticleListComponent');
  }
}
