import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Roles} from '../model/roles.model';
import {map} from 'rxjs/operators';


@Directive({
  selector: '[appUserCanAccess]'
})
export class UserCanAccessDirective implements OnInit, OnDestroy {

  @Input('appUserCanAccess') roles: Roles[];

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }

  ngOnInit() {
    this.authService.getUserContext()
      .pipe(
        map(userContext => {
          if (this.roles) {
            return !!this.roles.find(role => role === userContext.role);
          } else {
            return true;
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

  }

}
