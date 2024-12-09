import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: false,
})
export class ReversePipe implements PipeTransform {
  transform(str: string): string {
    const charArray = str.split('');
    const reversedCharArray = charArray.reverse();
    return reversedCharArray.join('');
  }
}
