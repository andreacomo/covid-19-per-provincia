import { Pipe, PipeTransform } from '@angular/core';
import { Colors } from '../models/colors';

@Pipe({
  name: 'asColor'
})
export class AsColorPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    const index = Math.min(value, Colors.SUPPORTED.length);
    return Colors.SUPPORTED[index];
  }

}
