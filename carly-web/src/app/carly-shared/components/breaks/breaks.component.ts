import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';

import {Roles} from '../../model/roles.model';
import {FilterBarComponent} from '../filter-bar/filter-bar.component';
import {FormGroupHelperService} from '../../services/form-group-helper.service';
import {MessageService} from '../../services/message.service';
import {BreaksManagementService} from '../../resources/breaks-management.service';
import {partsFilterFormFields} from '../../model/parts-filter-form';
import {Breaks} from '../../model/breaks.model';

@Component({
  selector: 'app-breaks',
  templateUrl: './breaks.component.html',
  styleUrls: ['./breaks.component.scss']
})
export class BreaksComponent implements OnInit {

  CarlyCompany = Roles.CARLY_COMPANY;
  CarlyAdministrator = Roles.CARLY_ADMINISTRATOR;

  @ViewChild('filterBar') filterBar: FilterBarComponent;
  breaks: Breaks.Model[];
  loading = true;
  noRecords = false;

  public breaksFilterFormControls = this.formGroupService.addControlToModel(partsFilterFormFields);
  public breaksFilterForm = this.formBuilder.group(this.formGroupService.getControlsFromModel(this.breaksFilterFormControls));

  public generalForm = this.formBuilder.group({
    breaksFilterForm: this.breaksFilterForm
  });

  public displayedColumns: Array<string> = [
    'name',
    'price',
    'delete'
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
    this.breaksService.findAllBreaks().subscribe(resData => {
      this.breaks = resData;
      this.loading = false;
      this.noRecords = this.breaks.length === 0;
    }, error => {
      this.messageService.showMessage('Connection problem', 3000);
      this.loading = false;
      console.log(error);
    });
  }


}
