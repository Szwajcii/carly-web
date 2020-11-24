import {Route, UrlSegment, UrlSegmentGroup} from '@angular/router';
import {Roles} from '../model/roles.model';

const USER_CONTEXT = 'carly-app.userContext';

export class CarlyMatcher {

  static carlyAdministratorMatcher(
    segments: UrlSegment[],
    group: UrlSegmentGroup,
    route: Route
  ) {
    const user = JSON.parse(localStorage.getItem(USER_CONTEXT));

    const isMatch = user ? user.roles.includes(Roles.CARLY_ADMINISTRATOR) : false;
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
    const user = JSON.parse(localStorage.getItem(USER_CONTEXT));
    const isMatch = user ? user.roles.includes(Roles.CARLY_COMPANY) : false;
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
    const user = JSON.parse(localStorage.getItem(USER_CONTEXT));
    const isMatch = user ? user.roles.includes(Roles.CARLY_CUSTOMER) : false;
    if (isMatch) {
      return {consumed: []};
    } else {
      return null;
    }
  }

  static carlyFactoryMatcher(
    segments: UrlSegment[],
    group: UrlSegmentGroup,
    route: Route
  ) {
    const user = JSON.parse(localStorage.getItem(USER_CONTEXT));
    const isMatch = user ? user.roles.includes(Roles.CARLY_FACTORY) : false;
    if (isMatch) {
      return {consumed: []};
    } else {
      return null;
    }
  }

}
