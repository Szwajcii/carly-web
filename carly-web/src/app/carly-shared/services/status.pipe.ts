import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'StatusPipe'})
export class StatusPipe implements PipeTransform {
  transform(status: string): string {
    return status.replace('_', ' ');
  }
}
