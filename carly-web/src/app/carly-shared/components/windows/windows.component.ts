import {Component, OnInit, ViewChild} from '@angular/core';
import {Roles} from '../../model/roles.model';
import {Windows} from '../../model/windows.model';
import {WindowsManagementService} from '../../resources/windows-management.service';
import {DataTableComponent} from '../data-table/data-table.component';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.scss']
})
export class WindowsComponent implements OnInit {

  CarlyFactory = Roles.CARLY_FACTORY;
  CarlyAdministrator = Roles.CARLY_ADMINISTRATOR;

  @ViewChild(DataTableComponent) dataTable: DataTableComponent;
  windows: Windows.Model[];
  loading = true;
  noRecords = false;

  public displayedColumns: Array<string> = [
    'name',
    'price'
  ];

  constructor(
    private messageService: MessageService,
    private windowsManagementService: WindowsManagementService
  ) {
  }

  ngOnInit(): void {
    this.windowsManagementService.findAllWindows().subscribe(resData => {
      this.windows = resData;
      this.loading = false;
      this.noRecords = this.windows.length === 0;
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
