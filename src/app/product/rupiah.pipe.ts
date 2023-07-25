import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupiah'
})
export class RupiahPipe implements PipeTransform {
  transform(value: number): string {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 2
    });
    return formatter.format(value);
  }
}
