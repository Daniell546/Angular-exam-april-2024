import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (value.length > 200) {
      const index = value.substring(0, 200).lastIndexOf(' ');

      return `${value.substring(0, index)}...`;
    }
    return value;
  }
}
