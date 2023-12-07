import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrycode',
})
export class CountrycodePipe implements PipeTransform {
  transform(value: number, code?: string): string {
    switch (code) {
      case 'USA':
        return '+1 ' + value;
      case 'AUS':
        return '+12 ' + value;
      default:
        return '+91 ' + value;
    }
  }
}
