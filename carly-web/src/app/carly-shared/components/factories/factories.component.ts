import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../services/message.service';
import {FactoryMatch} from '../../model/factory-match.model';
import {FactoryManagementService} from '../../resources/factory-management.service';
import {TEST_DATA} from './test-factories-data';
import {AuthService} from '../auth/auth.service';
import {BrandManagementService} from '../../resources/brand-management.service';
import {CompanyResponse} from '../../model/company-response.model';
import {CompanyMatchResponse} from '../../model/company-match-response.model';

@Component({
  selector: 'app-factories',
  templateUrl: './factories.component.html',
  styleUrls: ['./factories.component.scss']
})
export class FactoriesComponent implements OnInit {


  public datasource = new MatTableDataSource([]);
  contextCompanyId: string;
  factories: FactoryMatch[];
  factoriesToMatch: CompanyResponse[] = [];
  matchedFactories: CompanyMatchResponse[] = [];
  loading = true;
  noRecords = false;

  public displayedColumns: Array<string> = [
    'name',
    'status',
    'action'
  ];

  constructor(
    private messageService: MessageService,
    private factoryManagementService: FactoryManagementService,
    private brandManagementService: BrandManagementService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.factories = TEST_DATA;
    this.loading = false;
    this.noRecords = this.factories.length === 0;
    this.datasource = new MatTableDataSource<any>(this.factories);

    this.authService.getUserContext().subscribe(resData => {
      if (resData != null) {
        this.contextCompanyId = resData.id;
      }
    }, error => {
      this.messageService.showMessage('Unexpected error occurred!');
      console.log(error);
    });
  }
}
