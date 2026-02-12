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
      }
    ]
  }
];
