import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventService } from 'src/services/event.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less'],
  providers: [],
})
export class ChildComponent implements OnInit {
  @Input('is-show') isShow: boolean = false;
  @Output() toggle = new EventEmitter<boolean>();

  constructor(private eventBus: EventService) {}
  ngOnInit(): void {
    console.log('========初始化自组建==========');
  }
  test() {
    console.log('我是子组建');
  }
  onClickToggle() {
    this.toggle.emit(!this.isShow);
    this.eventBus.emit(123);
  }
}
