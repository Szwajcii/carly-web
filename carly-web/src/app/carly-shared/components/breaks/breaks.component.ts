import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {FormBuilder} from '@angular/forms';

import {Roles} from '../../model/roles.model';
import {FilterBarComponent} from '../filter-bar/filter-bar.component';
import {FormGroupHelperService} from '../../services/form-group-helper.service';
import {MessageService} from '../../services/message.service';
import {BreaksManagementService} from '../../resources/breaks-management.service';
import {BreaksDatasource} from './breaks-datasource';
import {partsFilterFormFields} from '../../model/parts-filter-form';

@Component({
  selector: 'app-breaks',
  templateUrl: './breaks.component.html',
  styleUrls: ['./breaks.component.scss']
})
export class BreaksComponent implements OnInit {

  CarlyCompany = Roles.CARLY_COMPANY;

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('filterBar') filterBar: FilterBarComponent;
  @ViewChild(MatSort) sort: MatSort;

  public breaksFilterFormControls = this.formGroupService.addControlToModel(partsFilterFormFields);
  public breaksFilterForm = this.formBuilder.group(this.formGroupService.getControlsFromModel(this.breaksFilterFormControls));

  public generalForm = this.formBuilder.group({
    breaksFilterForm: this.breaksFilterForm
  });

  public datasource: BreaksDatasource;
  public displayedColumns: Array<string> = [
    'name'
  ];

  public columnsToFilter: Array<string> = [];

  constructor(
    private formGroupService: FormGroupHelperService,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private breaksService: BreaksManagementService
  ) {
  }

  ngOnInit(): void {
    this.datasource = new BreaksDatasource(this.breaksService, this.paginator, this.messageService);
  }


}
