import {Component, inject} from '@angular/core';
import { ArticleListComponent } from './article-list.component';
import {LoggerService} from '../../core/services/logger.service';
import {ArticleViewerComponent} from './article-list-viewer.component';

@Component({
  selector: 'knowledge-bank-page',
  standalone: true,
  imports: [ArticleListComponent, ArticleViewerComponent],
  template: `
    <div class="flex h-[calc(100vh-80px)]">

      <div class="w-1/3 border-r">
        <app-article-list />
      </div>

      <div class="w-2/3 p-6">
        <app-article-viewer />
      </div>

    </div>
  `
})
export class KnowledgeBasePage {
  private logger = inject(LoggerService);

  constructor() {
    this.logger.info('KnowledgeBaseComponent');
  }
}
