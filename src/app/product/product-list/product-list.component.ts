import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ChildComponent } from '../../components/child/child.component';
import { LoggerService } from '../../../services/logger.service';
import { ActivatedRoute } from '@angular/router';

interface CustomResponseData<T> {
  code: number;
  message: string;
  data: T;
}

interface Product {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
})
export class ProductListComponent implements OnInit, AfterViewInit {
  // 获取子组件实例
  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  // 获取一组dom元素
  @ViewChildren('list') listElement!: QueryList<HTMLDivElement>;

  isShow = true;
  price = 10;
  currentDate = new Date();
  products: Product[] = [];
  switch = {
    first: 's-list-1',
    second: 's-list-2',
  };
  // 课程数据
  courseData: number[] = [];

  constructor(
    private http: HttpClient,
    private loggerService: LoggerService,
    private route: ActivatedRoute
  ) {}

  leave(): Promise<boolean> {
    console.log('======离开======');
    return new Promise((resolve) => {
      this.route.queryParams.subscribe((params) => {
        resolve(params.leave !== '1');
      });
    });
  }

  ngOnInit(): void {
    console.log(this.route, '======欢迎访问商品列表======');
    this.loggerService.log('日志信息');
    this.route.queryParams.subscribe((params) => {
      console.log(params, '==========路由参数');
    });
    this.http
      .get<CustomResponseData<Product[]>>('/api/product/list/xx', {
        params: {
          name: '123',
        },
      })
      .subscribe((res) => {
        console.log(res, '=======获取商品列表');
        if (res.code === 200) {
          this.products = res.data;
        }
      });
  }
  ngAfterViewInit(): void {
    const { childComponent, listElement } = this;
    console.log(childComponent, '=======子组件');
    childComponent.test();
    console.log(listElement, '-------一组dom元素---------');
    console.log(listElement.toArray(), '-------一组dom元素toArray---------');
  }
  onSubmit(form: NgForm) {
    console.log(form.value, '========form表单数据');
  }
  onSwitchClass() {
    const { first, second } = this.switch;
    this.switch = {
      first: second,
      second: first,
    };
  }
  exchangeCourseData() {
    const { courseData } = this;
    this.courseData = courseData.length ? [] : [1];
  }
  onToggle(isShow: boolean) {
    this.isShow = isShow;
  }
}
