import {DetailsFormHelper} from '../../../model/details-form-helper.model';

export const factoryDetails: DetailsFormHelper.Model[] = [
  {
    inputName: 'factoryName',
    label: 'Name',
  },
  {
    inputName: 'phoneNumber',
    label: 'Phone number',
    type: 'phone'
  },
  {
    inputName: 'email',
    label: 'Email'
  }
];

export const addressDetails: DetailsFormHelper.Model[] = [
  {
    inputName: 'street',
    label: 'Street'
  },
  {
    inputName: 'number',
    label: 'Number'
  },
  {
    inputName: 'flat',
    label: 'Flat'
  },
  {
    inputName: 'town',
    label: 'Town'
  },
  {
    inputName: 'zipCode',
    label: 'Zip Code'
  },
  {
    inputName: 'country',
    label: 'Country'
  }
];
