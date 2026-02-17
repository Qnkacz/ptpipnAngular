import {inject, Injectable, signal} from '@angular/core';
import {LoggerService} from './logger.service';
import {Article} from '../../shared/model/article.model';

@Injectable({providedIn: 'root'})
export class ArticleService {

  private static readonly ARTICLE_SIZE: number = 100;
  private static readonly WORDS = [
    'angular','component','signal','typescript','template',
    'design','pattern','architecture','state','service',
    'performance','virtual','scroll','lazy','rendering',
    'module','router','standalone','inject','provider']

  private readonly _articles = signal<Article[]>([]);
  readonly articles = this._articles.asReadonly()

  readonly selectedArticle = signal<Article | null>(null)
  private logger = inject(LoggerService);

  constructor() {
    this.logger.info(`Loading ${ArticleService.ARTICLE_SIZE} articles...`);
    this.generateArticles(ArticleService.ARTICLE_SIZE)
  }

  select(article: Article) {
    this.selectedArticle.set(article);
  }

  private generateArticles(n: number) {
    const randomWords = (count: number) =>
      Array.from({ length: count })
        .map(() => ArticleService.WORDS[Math.floor(Math.random() * ArticleService.WORDS.length)])
        .join(' ');

    const generated = Array.from({ length: n }).map((_, i) => ({
      index: i + 1,
      title: `Article ${i + 1}`,
      content: randomWords(50)
    }));
    this._articles.set(generated);
  }


}
