import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from '../components/auth/auth.service';
import {Roles} from '../model/roles.model';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';


@Directive({
  selector: '[appUserCanAccess]'
})
export class UserCanAccessDirective implements OnInit, OnDestroy {

  @Input('appUserCanAccess') roles: Roles[];
  private permission$: Subscription;

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }

  ngOnInit() {
    this.permission$ = this.authService.getUserContext()
      .pipe(
        map(userContext => {
          if (userContext != null && this.roles) {
            return !!this.roles.some(role => userContext.roles.includes(role));
          } else {
            return false;
          }
        })
      ).subscribe(isAllowed => {
      if (isAllowed) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }

  ngOnDestroy() {
    this.permission$.unsubscribe();
  }

}
