import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {Wheels} from '../../../model/wheels.model';
import {FormAction} from '../../../model/form-action.model';
import {WheelsManagementService} from '../../../resources/wheels-management.service';

@Component({
  selector: 'app-wheels-edit',
  templateUrl: './wheels-edit.component.html',
  styleUrls: ['./wheels-edit.component.scss']
})
export class WheelsEditComponent implements OnInit {

  wheelsModel: Wheels.Model;
  formAction = FormAction.EDIT;

  constructor(
    private activatedRoute: ActivatedRoute,
    private wheelsManagementService: WheelsManagementService
  ) {
  }

  ngOnInit(): void {

    this.findWheelsById()
      .pipe(
        mergeMap(id => this.wheelsManagementService.findById(id)),
        map(model => {
          console.log(200, model);
          return model;
        })
      )
      .subscribe(model => {
        this.wheelsModel = model;
      });

  }

  private findWheelsById(): Observable<string> {
    return this.activatedRoute.params.pipe(map(params => params.id));
  }

}
