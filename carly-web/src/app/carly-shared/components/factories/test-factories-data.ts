import {FactoryMatch} from '../../model/factory-match.model';
import {MatchStatus} from '../../model/match-status.enum';

export const TEST_DATA: FactoryMatch[] = [
  {
    company: {
      id: '111111',
      companyName: 'Factory one',
      email: 'test@test.com',
      phoneNumber: '111111111',
      address: null,
      createDate: null
    },
    matchStatus: MatchStatus.NOT_MATCHED,
  },
  {
    company: {
      id: '222222',
      companyName: 'Factory Two',
      email: 'test@test.com',
      phoneNumber: '222222222',
      address: null,
      createDate: null
    },
    matchStatus: MatchStatus.PENDING_APPROVAL,
  },
  {
    company: {
      id: '333333',
      companyName: 'Factory Three',
      email: 'test@test.com',
      phoneNumber: '333333333',
      address: null,
      createDate: null
    },
    matchStatus: MatchStatus.MATCHED,
  }
];


