import { Component, inject } from '@angular/core';
import {ArticleService} from '../../core/services/article.service';
import {LoggerService} from '../../core/services/logger.service';

@Component({
  selector: 'app-article-viewer',
  standalone: true,
  template: `
    @if (selected()) {
      <h2 class="text-2xl font-bold mb-4">
        {{ selected()!.title }}
      </h2>

      <p class="text-gray-700 leading-relaxed">
        {{ selected()!.content }}
      </p>
    } @else {
      <div class="text-gray-400 italic">
        Select an article from the list.
      </div>
    }
  `
})
export class ArticleViewerComponent {
  private articleService = inject(ArticleService);
  private logger = inject(LoggerService);

  constructor() {
    this.logger.info('Article List');
  }
  selected = this.articleService.selectedArticle;
}
