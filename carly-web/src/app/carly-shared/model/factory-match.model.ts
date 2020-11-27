import {Company} from './company.model';
import {MatchStatus} from './match-status.enum';

export class FactoryMatch {
  company: Company.Model;
  matchStatus: MatchStatus;
}
