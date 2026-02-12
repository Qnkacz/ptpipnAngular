import {Component, inject} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {HlmButton} from '@spartan-ng/helm/button';
import {LoggerService} from '../core/services/logger.service';
import {filter} from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, HlmButton],
  template: `
    <header class="border-b bg-white shadow-sm">
      <div class="container mx-auto flex items-center justify-between px-4 py-4">

        <h1 class="text-lg font-semibold">
          PTPiPN
        </h1>

        <nav class="flex gap-4">
          <a routerLink="/" routerLinkActive="font-bold">
            Strona główna
          </a>
          <button hlmBtn routerLink="/news" routerLinkActive="font-bold">
            Aktualności
          </button>
          <button hlmBtn routerLink="/conferences" routerLinkActive="font-bold">
            Konferencje
          </button>
          <button hlmBtn routerLink="/contact" routerLinkActive="font-bold">
            Kontakt
          </button>
        </nav>

      </div>
    </header>
  `
})
export class HeaderComponent {
  private router = inject(Router)
  private logger = inject(LoggerService)

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.logger.info('Navigation event clicked', {
          url: event.urlAfterRedirects
        })
      })
  }
}
