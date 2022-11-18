import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { EventService } from 'src/services/event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  subscription!: Subscription;

  // 获取dom元素
  @ViewChild('test') test!: ElementRef<HTMLInputElement>;

  constructor(private eventBus: EventService) {}

  ngOnInit(): void {
    this.subscription = this.eventBus.subscribe((param: unknown) => {
      console.log(param, '=======监听到数据');
    });
  }

  ngAfterViewInit() {
    // this.loggerService.log(this.test, '========测试');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
