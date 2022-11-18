import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(...args: unknown[]) {
    console.log('[ info  ]', ...args);
  }
  warn(msg: unknown) {
    console.warn('[ warn  ]', msg);
  }
  error(msg: unknown) {
    console.error('[ error ]', msg);
  }
}
