import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {HlmButton} from '@spartan-ng/helm/button';

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
export class HeaderComponent {}
