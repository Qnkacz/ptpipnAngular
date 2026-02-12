import {Component, inject} from '@angular/core';
import {LoggerService} from '../../core/services/logger.service';

@Component({
  standalone: true,
  template: `
    <section class="space-y-8">

      <div class="bg-muted rounded-lg p-8">
        <h2 class="text-2xl font-semibold mb-4">
          Polskie Towarzystwo Pielęgniarek i Położnych Neonatologicznych
        </h2>
        <p>
          Oficjalna strona stowarzyszenia...
        </p>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4">
          Najnowsze aktualności
        </h3>

        <!-- Later replace with dynamic cards -->
        <div class="grid md:grid-cols-3 gap-4">
          <div class="border rounded-lg p-4">
            News card
          </div>
        </div>
      </div>

    </section>
  `
})
export class HomePage {
  private logger = inject(LoggerService)

  constructor() {
    this.logger.info('HomePage constructed')
  }
}
