import {Component, input, inject, computed, effect} from '@angular/core';
import {Article} from '../../shared/model/article.model';
import {ArticleService} from '../../core/services/article.service';
import {LoggerService} from '../../core/services/logger.service';

@Component({
  selector: 'app-article-item',
  standalone: true,
  template: `
    <div
      (click)="select()"
      class="p-4 border-b cursor-pointer h-15 flex items-center"
      [class.bg-gray-200]="isSelected()">

      {{ article().title }}

    </div>
  `
})
export class ArticleItemComponent {
  article = input.required<Article>();
  private logger = inject(LoggerService);

  constructor() {
    effect(() => {
      const current = this.article();
      this.logger.info(`Rendered article ${current.index} + ${current.title}`);
    })
  }

  private articleService = inject(ArticleService);

  isSelected = computed(() =>
    this.articleService.selectedArticle()?.index === this.article().index
  );

  select() {
    this.articleService.select(this.article());
  }
}
