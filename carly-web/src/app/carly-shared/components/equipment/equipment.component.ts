import {Component, OnInit, ViewChild} from '@angular/core';
import {Roles} from '../../model/roles.model';
import {Equipment} from '../../model/equipment.model';
import {EquipmentManagementService} from '../../resources/equipment-management.service';
import {MessageService} from '../../services/message.service';
import {DataTableComponent} from '../data-table/data-table.component';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  CarlyFactory = Roles.CARLY_FACTORY;
  CarlyAdministrator = Roles.ADMINISTRATOR;

  @ViewChild(DataTableComponent) dataTable: DataTableComponent;
  equipment: Equipment.Model[];
  loading = true;
  noRecords = false;

  public displayedColumns: Array<string> = [
    'name',
    'price'
  ];

  constructor(
    private messageService: MessageService,
    private equipmentManagementService: EquipmentManagementService
  ) {
  }

  ngOnInit(): void {
    this.equipmentManagementService.findAllEquipment()
      .subscribe(resData => {
        this.equipment = resData;
        this.loading = false;
        this.noRecords = this.equipment.length === 0;
      }, error => {
        this.messageService.showMessage('Connection problem', 3000);
        this.loading = false;
        console.log(error);
    });
  }

  clearFilters() {
    this.dataTable.clearFilter();
  }

}
