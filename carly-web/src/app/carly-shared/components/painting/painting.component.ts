import {Component, OnInit, ViewChild} from '@angular/core';
import {Roles} from '../../model/roles.model';
import {DataTableComponent} from '../data-table/data-table.component';
import {Painting} from '../../model/painting.model';
import {MessageService} from '../../services/message.service';
import {PaintingManagementService} from '../../resources/painting-management.service';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.scss']
})
export class PaintingComponent implements OnInit {

  CarlyFactory = Roles.CARLY_FACTORY;
  CarlyAdministrator = Roles.CARLY_ADMINISTRATOR;

  @ViewChild(DataTableComponent) dataTable: DataTableComponent;
  paintings: Painting.Model[];
  loading = true;
  noRecords = false;

  public displayedColumns: Array<string> = [
    'name',
    'price'
  ];

  constructor(
    private messageService: MessageService,
    private paintingManagementService: PaintingManagementService
  ) {
  }

  ngOnInit(): void {
    this.paintingManagementService.findAllPaintings().subscribe(resData => {
      this.paintings = resData;
      this.loading = false;
      this.noRecords = this.paintings.length === 0;
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
