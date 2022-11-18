import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: number) {
    if (!value) return '';
    limit = limit || 50;
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
