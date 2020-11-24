import {Component, OnInit, ViewChild} from '@angular/core';
import {Roles} from '../../model/roles.model';
import {Tires} from '../../model/tires.model';
import {TiresManagementService} from '../../resources/tires-management.service';
import {DataTableComponent} from '../data-table/data-table.component';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-tires',
  templateUrl: './tires.component.html',
  styleUrls: ['./tires.component.scss']
})
export class TiresComponent implements OnInit {

  CarlyFactory = Roles.CARLY_FACTORY;
  CarlyAdministrator = Roles.CARLY_ADMINISTRATOR;

  @ViewChild(DataTableComponent) dataTable: DataTableComponent;
  tires: Tires.Model[];
  loading = true;
  noRecords = false;

  public displayedColumns: Array<string> = [
    'name',
    'price'
  ];

  constructor(
    private messageService: MessageService,
    private tiresManagementService: TiresManagementService
  ) {
  }

  ngOnInit(): void {
    this.tiresManagementService.findAllTires().subscribe(resData => {
      this.tires = resData;
      this.loading = false;
      this.noRecords = this.tires.length === 0;
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
