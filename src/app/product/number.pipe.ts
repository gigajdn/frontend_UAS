import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(value: number | string, locale?: string): string {
    return new Intl.NumberFormat(locale, {
    }).format(Number(value));
  }
}