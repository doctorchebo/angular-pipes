import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, inputFilter: string, category: string) {
    if (value.length === 0 || inputFilter == '') {
      return value;
    }
    let result_array = [];
    for (let item of value) {
      if (item[category] === inputFilter) {
        result_array.push(item);
      }
    }

    return result_array;
  }
}
