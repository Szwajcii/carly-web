import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../carly-shared/services/message.service';
import {FactoryManagementService} from '../../carly-shared/resources/factory-management.service';
import {UserManagementService} from '../../carly-shared/resources/user-management.service';
import {UNEXPECTED_ERROR} from '../../carly-shared/utils/error-messages';
import {CompanyMatchResponse} from '../../carly-shared/model/company-match-response.model';
import {CompanyMatchManagementService} from '../../carly-shared/resources/company-match-management.service';
import {MatchResponse} from '../../carly-shared/model/match-response.model';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  loading = true;
  noRecords = false;
  factoryId: string;
  pendingContracts: CompanyMatchResponse[];
  signedContracts: CompanyMatchResponse[];

  constructor(
    private messageService: MessageService,
    private factoryManagementService: FactoryManagementService,
    private userManagementService: UserManagementService,
    private companyMatchManagementService: CompanyMatchManagementService
  ) {
  }

  ngOnInit(): void {
    this.userManagementService.findUserContextId().subscribe(id => {
      this.factoryId = id;
      this.fetchPendingContracts(this.factoryId);
      this.fetchAcceptedContracts(this.factoryId);
    });
  }

  fetchPendingContracts(factoryId: string) {
    this.companyMatchManagementService.findAllPendingContracts(factoryId)
      .subscribe(resData => {
        this.pendingContracts = resData.companyFactoriesResponse;
        this.loading = false;
        console.log(resData);
      }, error => {
        this.loading = false;
        console.log(error);
        this.messageService.showMessage(UNEXPECTED_ERROR);
      });
  }

  fetchAcceptedContracts(factoryId: string) {
    this.companyMatchManagementService.findAllAcceptedContracts(factoryId)
      .subscribe(resData => {
        this.signedContracts = resData.companyFactoriesResponse;
        this.loading = false;
        console.log(resData);
      }, error => {
        this.loading = false;
        console.log(error);
        this.messageService.showMessage(UNEXPECTED_ERROR);
      });
  }

  confirmMatchingWithCompany(element: any) {
    // todo: Add confirmation dialog
    const matchResponse: MatchResponse.Model = {
      matchId: element.matchId
    };
    this.companyMatchManagementService.confirmMatchingWithCompany(matchResponse)
      .subscribe(resData => {
        console.log(resData);
        this.fetchPendingContracts(this.factoryId);
        this.fetchAcceptedContracts(this.factoryId);
        this.messageService.showMessage(resData.message);
      }, error => {
        console.log(error);
      });
  }

  cancelMatchingWithCompany(element: any) {
    // todo: Add confirmation dialog
    const matchResponse: MatchResponse.Model = {
      matchId: element.matchId
    };
    this.companyMatchManagementService.cancelMatchingWithCompany(matchResponse)
      .subscribe(resData => {
        console.log(resData);
        this.fetchPendingContracts(this.factoryId);
        this.fetchAcceptedContracts(this.factoryId);
        this.messageService.showMessage(resData.message);
      }, error => {
        console.log(error);
      });
  }
}
