import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[vCopy]',
})
export class CopyDirective {
  content: string = '';
  @Input()
  set vCopy(content: string | undefined) {
    this.content = content || '';
  }

  @HostListener('click', ['$event'])
  onClickCopy(event: MouseEvent) {
    const text = (<Record<string, any>>event.target).innerText;
    console.log(text, '====执行点击====');
    this.copyContent(this.content || text)
      .then(() => {
        console.log('===复制成功===');
      })
      .catch(() => {
        console.log('===复制失败===');
      });
  }

  private copyContent(content: string) {
    return new Promise((resolve, reject) => {
      const { clipboard } = window.navigator;
      if (clipboard) {
        resolve(clipboard.writeText(content));
      } else {
        reject();
      }
    });
  }
}
