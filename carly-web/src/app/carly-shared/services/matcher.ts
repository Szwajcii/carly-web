import {Route, UrlSegment, UrlSegmentGroup} from '@angular/router';
import {Roles} from '../model/roles.model';

export class CarlyMatcher {

  static carlyAdministratorMatcher(
    segments: UrlSegment[],
    group: UrlSegmentGroup,
    route: Route
  ) {
    const user = JSON.parse(localStorage.getItem('carly-app.userContext'));

    const isMatch = user ? user.role === Roles.CARLY_ADMINISTRATOR : false;
    if (isMatch) {
      return {consumed: []};
    } else {
      return null;
    }
  }

  static carlyCompanyMatcher(
    segments: UrlSegment[],
    group: UrlSegmentGroup,
    route: Route
  ) {
    const user = JSON.parse(localStorage.getItem('carly-app.userContext'));

    const isMatch = user ? user.role === Roles.CARLY_COMPANY : false;
    if (isMatch) {
      return {consumed: []};
    } else {
      return null;
    }
  }

  static carlyCustomerMatcher(
    segments: UrlSegment[],
    group: UrlSegmentGroup,
    route: Route
  ) {
    const user = JSON.parse(localStorage.getItem('carly-app.userContext'));

    const isMatch = user ? user.role === Roles.CARLY_CUSTOMER : false;
    if (isMatch) {
      return {consumed: []};
    } else {
      return null;
    }
  }

}
