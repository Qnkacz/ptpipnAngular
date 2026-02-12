import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="space-y-8">

      <!-- Page Title -->
      <div>
        <h2 class="text-3xl font-semibold mb-2">
          Aktualności
        </h2>
        <p class="text-muted-foreground">
          Najnowsze informacje i wydarzenia
        </p>
      </div>

      <!-- News List -->
      <div class="space-y-6">

        <article
          class="border rounded-lg p-6 hover:shadow-md transition"
        >
          <h3 class="text-xl font-semibold mb-2">
            Tytuł aktualności
          </h3>

          <p class="text-sm text-muted-foreground mb-3">
            12 lutego 2026
          </p>

          <p class="mb-4">
            Krótki opis aktualności. Kilka zdań wprowadzających do treści...
          </p>

          <a
            routerLink="/news/1"
            class="text-primary font-medium"
          >
            Czytaj więcej →
          </a>
        </article>

        <!-- Repeat for more posts -->

      </div>

    </section>
  `
})
export class NewsPage {}
