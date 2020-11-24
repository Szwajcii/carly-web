import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {Equipment} from '../../../model/equipment.model';
import {FormAction} from '../../../model/form-action.model';
import {EquipmentManagementService} from '../../../resources/equipment-management.service';
import {MessageService} from '../../../services/message.service';

@Component({
  selector: 'app-equipment-edit',
  templateUrl: './equipment-edit.component.html',
  styleUrls: ['./equipment-edit.component.scss']
})
export class EquipmentEditComponent implements OnInit {

  equipmentModel: Equipment.Model;
  formAction = FormAction.EDIT;

  constructor(
    private activatedRoute: ActivatedRoute,
    private equipmentManagementService: EquipmentManagementService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.findEquipmentById()
      .pipe(
        mergeMap(id => this.equipmentManagementService.findById(id)),
        map(model => {
          console.log(200, model);
          return model;
        })
      ).subscribe(model => {
      this.equipmentModel = model;
    }, error => {
      this.messageService.showMessage('Unexpected error occurred!');
      console.log(error);
    });
  }

  private findEquipmentById(): Observable<string> {
    return this.activatedRoute.params.pipe(map(params => params.id));
  }

}
