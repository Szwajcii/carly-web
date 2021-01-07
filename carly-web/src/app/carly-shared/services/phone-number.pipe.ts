import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'PhoneNumberPipe'})
export class PhoneNumberPipe implements PipeTransform {
  transform(value: any): any {
    return value;
  }

}
