import {Pipe, PipeTransform} from '@angular/core';
import {MatchStatus} from '../model/match-status.enum';

@Pipe({name: 'StatusPipe'})
export class StatusPipe implements PipeTransform {
  transform(status: string): string {
    if (status === null) {
      status = MatchStatus.NOT_MATCHED;
    }
    return status.replace('_', ' ');
  }
}
