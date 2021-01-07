import {MatchStatus} from './match-status.enum';

export class CompanyMatchResponse {
  matchId: string;
  companyName: string;
  factoryId: string;
  factoryName: string;
  status: MatchStatus;
}
