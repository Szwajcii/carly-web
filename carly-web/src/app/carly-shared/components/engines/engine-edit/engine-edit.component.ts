import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

import {Engine} from '../../../model/engine.model';
import {PartFormAction} from '../../../model/part-form-action.model';
import {EngineManagementService} from '../../../resources/engine-management.service';

@Component({
  selector: 'app-engine-edit',
  templateUrl: './engine-edit.component.html',
  styleUrls: ['./engine-edit.component.scss']
})
export class EngineEditComponent implements OnInit {

  engineModel: Engine.Model;
  formAction = PartFormAction.EDIT;

  constructor(
    private activatedRoute: ActivatedRoute,
    private engineManagementService: EngineManagementService
  ) {
  }

  ngOnInit(): void {

    this.findEngineById()
      .pipe(
        mergeMap(id => this.engineManagementService.findById(id)),
        map(model => {
          console.log(200, model);
          return model;
        })
      ).subscribe(model => {
      this.engineModel = model;
    });

  }

  private findEngineById(): Observable<string> {
    return this.activatedRoute.params.pipe(map(params => params.id));
  }

}
