import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(list: any[], filterCategory: string): any[] {
    list.sort((a, b) =>
      a[filterCategory] > b[filterCategory]
        ? 1
        : a[filterCategory] < b[filterCategory]
        ? -1
        : 0
    );
    return list;
  }
}
