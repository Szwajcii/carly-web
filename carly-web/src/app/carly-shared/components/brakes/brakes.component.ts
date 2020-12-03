import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';

import {Roles} from '../../model/roles.model';
import {FilterBarComponent} from '../filter-bar/filter-bar.component';
import {FormGroupHelperService} from '../../services/form-group-helper.service';
import {MessageService} from '../../services/message.service';
import {BrakesManagementService} from '../../resources/brakes-management.service';
import {partsFilterFormFields} from '../../model/parts-filter-form';
import {Brake} from '../../model/brakes.model';
import {DataTableComponent} from '../data-table/data-table.component';

@Component({
  selector: 'app-brakes',
  templateUrl: './brakes.component.html',
  styleUrls: ['./brakes.component.scss']
})
export class BrakesComponent implements OnInit {

  CarlyFactory = Roles.CARLY_FACTORY;
  CarlyAdministrator = Roles.ADMINISTRATOR;

  @ViewChild('filterBar') filterBar: FilterBarComponent;
  @ViewChild(DataTableComponent) dataTable: DataTableComponent;
  brakes: Brake.Model[];
  loading = true;
  noRecords = false;

  public brakesFilterFormControls = this.formGroupService.addControlToModel(partsFilterFormFields);
  public brakesFilterForm = this.formBuilder.group(this.formGroupService.getControlsFromModel(this.brakesFilterFormControls));

  public generalForm = this.formBuilder.group({
    brakesFilterForm: this.brakesFilterForm
  });

  public displayedColumns: Array<string> = [
    'name',
    'price',
    'brakeType'
  ];

  public columnsToFilter: Array<string> = [];

  constructor(
    private formGroupService: FormGroupHelperService,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private brakesService: BrakesManagementService
  ) {
  }

  ngOnInit(): void {
    this.brakesService.findAllBrakes().subscribe(resData => {
      this.brakes = resData;
      this.loading = false;
      this.noRecords = this.brakes.length === 0;
    }, error => {
      this.messageService.showMessage('Connection problem', 3000);
      this.loading = false;
      console.log(error);
    });
  }

  clearFilters() {
    this.dataTable.clearFilter();
  }

  deleteBrakes(id: string) {
    console.log(id);
    this.brakesService.delete(id);
  }

}
