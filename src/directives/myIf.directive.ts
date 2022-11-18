import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myIf]',
})
export class MyIfDirective {
  private ifValue: boolean = false;
  constructor(
    private readonly viewContainer: ViewContainerRef,
    private readonly templateRef: TemplateRef<unknown>
  ) {}

  @Input()
  set myIf(condition: boolean) {
    this.ifValue = condition;
    this.updateView();
  }
  private updateView(): void {
    const { ifValue, viewContainer, templateRef } = this;
    if (ifValue) {
      // 当传入true时，将template内容插入到视图内
      viewContainer.createEmbeddedView(templateRef);
    } else {
      // 当传入false时，清空视图内容
      viewContainer.clear();
    }
  }
}
