import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

import {Tires} from '../../../model/tires.model';
import {FormAction} from '../../../model/form-action.model';
import {TiresManagementService} from '../../../resources/tires-management.service';

@Component({
  selector: 'app-tires-edit',
  templateUrl: './tires-edit.component.html',
  styleUrls: ['./tires-edit.component.scss']
})
export class TiresEditComponent implements OnInit {

  tiresModel: Tires.Model;
  formAction = FormAction.EDIT;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tiresManagementService: TiresManagementService
  ) {
  }

  ngOnInit(): void {

    this.findTiresById().pipe(
      mergeMap(id => this.tiresManagementService.findById(id)),
      map(model => {
        console.log(200, model);
        return model;
      })
    ).subscribe(model => {
      this.tiresModel = model;
    });
  }

  private findTiresById(): Observable<string> {
    return this.activatedRoute.params.pipe(map(params => params.id));
  }

}
