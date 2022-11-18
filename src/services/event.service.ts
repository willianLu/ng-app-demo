import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private eventBus = new Subject();
  private eventBus$ = this.eventBus.asObservable();

  emit<T>(param: T) {
    console.log(param, '========触发service');
    this.eventBus.next(param);
  }

  subscribe(cb?: (param: unknown) => void) {
    return this.eventBus$.subscribe(cb);
  }
}
