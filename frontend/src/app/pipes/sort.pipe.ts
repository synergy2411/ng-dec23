import { Pipe, PipeTransform } from '@angular/core';
import { ITodo } from './filter.pipe';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(todoCollection: ITodo[], order: string): ITodo[] {
    if (order === '') {
      return todoCollection;
    }

    if (order === 'ascending') {
      return todoCollection.sort((a, b) => {
        if (a.label > b.label) {
          return +1;
        }
        if (a.label < b.label) {
          return -1;
        }
        return 0;
      });
    }
    return todoCollection.sort((a, b) => {
      if (a.label > b.label) {
        return -1;
      }
      if (a.label < b.label) {
        return +1;
      }
      return 0;
    });
  }
}
