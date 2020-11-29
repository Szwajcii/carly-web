import {Component, OnInit, ViewChild} from '@angular/core';
import {Roles} from '../../model/roles.model';
import {Engine} from '../../model/engine.model';
import {EngineManagementService} from '../../resources/engine-management.service';
import {MessageService} from '../../services/message.service';
import {DataTableComponent} from '../data-table/data-table.component';

@Component({
  selector: 'app-engines',
  templateUrl: './engines.component.html',
  styleUrls: ['./engines.component.scss']
})
export class EnginesComponent implements OnInit {

  CarlyFactory = Roles.CARLY_FACTORY;
  CarlyAdministrator = Roles.ADMINISTRATOR;

  @ViewChild(DataTableComponent) dataTable: DataTableComponent;
  engines: Engine.Model[];
  loading = true;
  noRecords = false;

  public displayedColumns: Array<string> = [
    'name',
    'price'
  ];

  constructor(
    private messageService: MessageService,
    private engineManagementService: EngineManagementService
  ) {
  }

  ngOnInit(): void {
    this.engineManagementService.findAllEngine().subscribe(resData => {
      this.engines = resData;
      this.loading = false;
      this.noRecords = this.engines.length === 0;
    }, error => {
      this.messageService.showMessage('Connection problem', 3000);
      this.loading = false;
      console.log(error);
    });
  }

  clearFilters() {
    this.dataTable.clearFilter();
  }

  deleteEngine(id: string) {
    console.log(id);

  }

}
