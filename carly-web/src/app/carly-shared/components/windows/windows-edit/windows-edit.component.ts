import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

import {Windows} from '../../../model/windows.model';
import {FormAction} from '../../../model/form-action.model';
import {WindowsManagementService} from '../../../resources/windows-management.service';

@Component({
  selector: 'app-windows-edit',
  templateUrl: './windows-edit.component.html',
  styleUrls: ['./windows-edit.component.scss']
})
export class WindowsEditComponent implements OnInit {

  windowsModel: Windows.Model;
  formAction = FormAction.EDIT;

  constructor(
    private activatedRoute: ActivatedRoute,
    private windowsManagementService: WindowsManagementService
  ) {
  }

  ngOnInit(): void {

    this.findWindowsById()
      .pipe(
        mergeMap(id => this.windowsManagementService.findById(id)),
        map(model => {
          console.log(200, model);
          return model;
        })
      )
      .subscribe(model => {
        this.windowsModel = model;
      });
  }

  private findWindowsById(): Observable<string> {
    return this.activatedRoute.params.pipe(map(params => params.id));
  }

}
