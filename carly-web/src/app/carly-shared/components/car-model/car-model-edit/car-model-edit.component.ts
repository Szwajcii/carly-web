import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CarModel} from '../../../model/car-model.model';
import {FormAction} from '../../../model/form-action.model';
import {CarModelManagementService} from '../../../resources/car-model-management.service';

@Component({
  selector: 'app-car-model-edit',
  templateUrl: './car-model-edit.component.html',
  styleUrls: ['./car-model-edit.component.scss']
})
export class CarModelEditComponent implements OnInit {

  carModel: CarModel.Model;
  formAction = FormAction.EDIT;
  details = true;
  isDisabled = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carModelManagementService: CarModelManagementService
  ) {
  }

  ngOnInit(): void {

    this.findCarModelsById()
      .pipe(
        mergeMap(id => this.carModelManagementService.findById(id)),
        map(model => {
          console.log(200, model);
          return model;
        })
      ).subscribe(model => {
      this.carModel = model;
    });

  }

  private findCarModelsById(): Observable<string> {
    return this.activatedRoute.params.pipe(map(params => params.id));
  }

}
