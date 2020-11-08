import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {Painting} from '../../../model/painting.model';
import {FormAction} from '../../../model/form-action.model';
import {PaintingManagementService} from '../../../resources/painting-management.service';

@Component({
  selector: 'app-painting-edit',
  templateUrl: './painting-edit.component.html',
  styleUrls: ['./painting-edit.component.scss']
})
export class PaintingEditComponent implements OnInit {

  paintingModel: Painting.Model;
  formAction = FormAction.EDIT;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paintingManagementService: PaintingManagementService
  ) {
  }

  ngOnInit(): void {

    this.findPaintingById()
      .pipe(
        mergeMap(id => this.paintingManagementService.findById(id)),
        map(model => {
          console.log(200, model);
          return model;
        })
      ).subscribe(model => {
      this.paintingModel = model;
    });
  }

  private findPaintingById(): Observable<string> {
    return this.activatedRoute.params.pipe(map(params => params.id));
  }

}
