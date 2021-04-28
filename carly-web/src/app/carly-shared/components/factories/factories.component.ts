import {Component, OnInit, ViewChild} from '@angular/core';
import {MessageService} from '../../services/message.service';
import {FactoryManagementService} from '../../resources/factory-management.service';
import {AuthService} from '../auth/auth.service';
import {BrandManagementService} from '../../resources/brand-management.service';
import {CompanyResponse} from '../../model/company-response.model';
import {CompanyMatchResponse} from '../../model/company-match-response.model';
import {UNEXPECTED_ERROR} from '../../utils/error-messages';
import {FactoriesDataTableComponent} from './factories-data-table/factories-data-table.component';
import {FindFactoriesDataTableComponent} from './find-factories-data-table/find-factories-data-table.component';

@Component({
  selector: 'app-factories',
  templateUrl: './factories.component.html',
  styleUrls: ['./factories.component.scss']
})
export class FactoriesComponent implements OnInit {

  @ViewChild(FactoriesDataTableComponent) factoriesDataTable: FactoriesDataTableComponent;
  @ViewChild(FindFactoriesDataTableComponent) findFactoriesDataTable: FindFactoriesDataTableComponent;

  contextCompanyId: string;
  factoriesToMatch: CompanyResponse[] = [];
  matchedFactories: CompanyMatchResponse[] = [];

  public displayedColumns: Array<string> = [
    'name',
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
    this.authService.getUserContext().subscribe(resData => {
      if (resData != null) {
        this.contextCompanyId = resData.id;
      }
    }, error => {
      this.messageService.showMessage(UNEXPECTED_ERROR);
      console.log(error);
    });
  }

  fetchPendingMatching() {
    this.factoriesDataTable.fetchAllAcceptedPendingMatching();
  }

  fetchPotentialFactoriesToMatch() {
    this.findFactoriesDataTable.findFactoriesToMatch();
  }

}
