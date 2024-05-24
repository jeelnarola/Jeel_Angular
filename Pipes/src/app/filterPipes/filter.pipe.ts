import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, SerchValu:string): any { 
    return value.filter(function(ele:any){
      return ele.name.toLowerCase().indexOf(SerchValu) > -1
    });

  }

}
