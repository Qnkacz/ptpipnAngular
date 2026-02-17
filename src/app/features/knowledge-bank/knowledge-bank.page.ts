import {Component, inject} from '@angular/core';
import {LoggerService} from '../../core/services/logger.service';

@Component({
  selector: 'app-knowledge-bank',
  template: `
  `
})
export class KnowledgeBankPage {
  logger = inject(LoggerService);
  constructor() {
    this.logger.info('knowledge bank page.')
  }
}
