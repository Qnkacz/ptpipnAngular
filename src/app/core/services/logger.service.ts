import { Injectable, isDevMode } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoggerService {

  info(message: String, data?: unknown) {
    if(isDevMode()) {
      console.debug(`[INFO]: ${message}`, data ?? '');
    }
  }

  warn(message: String, data?: unknown) {
    console.warn(`[WARN]: ${message}]`, data ?? '')
  }

  error(message?: String, data?: unknown) {
    console.warn(`[ERROR]: ${message}`, data ?? '');
  }
}
