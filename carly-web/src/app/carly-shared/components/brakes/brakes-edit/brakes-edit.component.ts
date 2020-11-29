import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {Brake} from '../../../model/brakes.model';
import {FormAction} from '../../../model/form-action.model';
import {BrakesManagementService} from '../../../resources/brakes-management.service';
import {MessageService} from '../../../services/message.service';

@Component({
  selector: 'app-brakes-edit',
  templateUrl: './brakes-edit.component.html',
  styleUrls: ['./brakes-edit.component.scss']
})
export class BrakesEditComponent implements OnInit {

  brakesModel: Brake.Model;
  formAction = FormAction.EDIT;

  constructor(
    private activatedRoute: ActivatedRoute,
    private brakesManagementService: BrakesManagementService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {

    this.findBrakesById()
      .pipe(
        mergeMap(id => this.brakesManagementService.findById(id)),
        map(model => {
          console.log(200, model);
          return model;
        })
      ).subscribe(model => {
      this.brakesModel = model;
    }, error => {
        this.messageService.showMessage('Unexpected error occurred!');
        console.log(error);
    });
  }

  private findBrakesById(): Observable<string> {
    return this.activatedRoute.params.pipe(map(params => params.id));
  }

}
