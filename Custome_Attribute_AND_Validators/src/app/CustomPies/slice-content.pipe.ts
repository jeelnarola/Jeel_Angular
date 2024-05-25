import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceContent'
})
export class SliceContentPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.substring(0,100) + '...';
  }

}
