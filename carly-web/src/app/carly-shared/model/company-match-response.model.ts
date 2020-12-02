import {MatchStatus} from './match-status.enum';

export class CompanyMatchResponse {
  companyName: string;
  factoryName: string;
  status: MatchStatus;
}
