import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, args?: number) {
    if (value.length > args){
      value = value.substring(0, args) + '...';
    }

    return value;
  }

}
