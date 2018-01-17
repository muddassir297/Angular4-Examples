import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {
// take the input value and return back transorm value...
  transform(inputvalue: any, args?: any): number {
    return Math.pow(inputvalue, args);
  }

}
