import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {UserManagementService} from '../../../resources/user-management.service';
import {User} from '../../../model/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  isDisabled = true;
  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userManagementService: UserManagementService
  ) {
  }

  ngOnInit(): void {

    this.findUserById()
      .pipe(
        mergeMap(id => this.userManagementService.findById(id)),
        map(model => {
          console.log(200, model);
          return model;
        })
      ).subscribe(userModel => {
      this.user = userModel;
    });

  }

  findUserById(): Observable<string> {
    if (this.userManagementService.getUserContext() != null) {
      return this.userManagementService.getUserContext().pipe(map(r => {
        return r.id;
      }));
    }
    return this.activatedRoute.params.pipe(map(params => params.id));
  }


}
