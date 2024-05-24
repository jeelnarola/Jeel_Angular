import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {


  transform(value: string, ...args: string[]): string {
    // Number Used in Pipe
    // const [a,b]=args
    // console.log(a,b); // 72 24
    // return value*a

    // String Used in Pipe
    if(value.length > 4){
      return value.substring(0,4) + "..."
      // return value.slice(0,3) + "..."
      // return value.substr(0,3) + "..."
    }
    else{
      return value
    }
  }

}
