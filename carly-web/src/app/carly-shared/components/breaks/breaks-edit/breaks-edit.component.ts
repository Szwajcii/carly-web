import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {Breaks} from '../../../model/breaks.model';
import {FormAction} from '../../../model/form-action.model';
import {BreaksManagementService} from '../../../resources/breaks-management.service';
import {MessageService} from '../../../services/message.service';

@Component({
  selector: 'app-breaks-edit',
  templateUrl: './breaks-edit.component.html',
  styleUrls: ['./breaks-edit.component.scss']
})
export class BreaksEditComponent implements OnInit {

  breaksModel: Breaks.Model;
  formAction = FormAction.EDIT;

  constructor(
    private activatedRoute: ActivatedRoute,
    private breaksManagementService: BreaksManagementService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {

    this.findBreaksById()
      .pipe(
        mergeMap(id => this.breaksManagementService.findById(id)),
        map(model => {
          console.log(200, model);
          return model;
        })
      ).subscribe(model => {
      this.breaksModel = model;
    }, error => {
        this.messageService.showMessage('Unexpected error occurred!');
        console.log(error);
    });
  }

  private findBreaksById(): Observable<string> {
    return this.activatedRoute.params.pipe(map(params => params.id));
  }

}
