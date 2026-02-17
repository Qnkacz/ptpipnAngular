import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home.page')
            .then(m => m.HomePage)
      },
      {
        path: 'news',
        loadComponent: () =>
          import('./features/news/news.page')
            .then(m => m.NewsPage)
      },
      {
        path: 'conferences',
        loadComponent: () =>
          import('./features/conferences/conference-page.component')
            .then(m => m.ConferencePage)
      },
      {
        path: 'knowledgeHub',
        loadComponent: () =>
          import('./features/knowledge-bank/knowledge-bank.page')
            .then(m => m.KnowledgeBasePage)
      }
    ]
  }
];
