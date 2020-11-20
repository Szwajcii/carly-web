import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

import {Breaks} from '../../../model/breaks.model';
import {ValueLabel} from '../../../model/value-label';
import {FormAction} from '../../../model/form-action.model';
import {MessageService} from '../../../services/message.service';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {BreaksManagementService} from '../../../resources/breaks-management.service';
import {breaksDetailsFormFields, breaksPreviews} from '../breaks-form-fields';
import {Brand} from '../../../model/brand.model';
import {UserManagementService} from '../../../resources/user-management.service';
import {Roles} from '../../../model/roles.model';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {CompanyManagementService} from '../../../resources/company-management.service';

@Component({
  selector: 'app-breaks-form',
  templateUrl: './breaks-form.component.html',
  styleUrls: ['./breaks-form.component.scss']
})
export class BreaksFormComponent implements OnInit {

  private static PREVIEW = 'preview';

  @Input() isDisabled = false;
  @Input() formAction: FormAction;
  @Input() breaksModel: Breaks.Model;
  @Input() submitEvent: EventEmitter<Breaks.Model> = new EventEmitter<Breaks.Model>();
  @Input() details = false;

  isCompanyContext = false;
  brands: Array<Brand>;
  breaksBrand: Brand;
  breaksPreviews: Array<ValueLabel>;
  breaksDetailsForm: FormGroup;
  breaksDetailsFormControls = this.formGroupService.addControlToModel(breaksDetailsFormFields)
    .map(controlModel => {
      if (controlModel.inputName === BreaksFormComponent.PREVIEW) {
        controlModel.selectOptions = breaksPreviews;
      }
      return controlModel;
    });


  constructor(
    private messageService: MessageService,
    private formGroupService: FormGroupHelperService,
    private router: Router,
    private breaksManagementService: BreaksManagementService,
    private userManagementService: UserManagementService,
    private companyManagementService: CompanyManagementService
  ) {
  }

  ngOnInit(): void {
    this.breaksPreviews = breaksPreviews;
    this.findBrands();
    this.findBrandFromContext();
  }

  findBrands() {
    // todo: Replace this with company from context or get companies from DB
  }

  findBrandFromContext() {
    const action = this.findCompanyId();

    if (action != null) {
      action.pipe(
        mergeMap(id => this.companyManagementService.findById(id)),
        map(model => {
          return model;
        })
      ).subscribe(data => {
        this.breaksBrand = new Brand(data.id, data.companyName);
        console.log(400, this.breaksBrand);
      }, error => {
        this.messageService.showMessage('Unexpected error has occurred!');
        console.log(error);
      });
    }
  }

  findCompanyId(): Observable<string> {
    return this.userManagementService.isUserHasRole(Roles.CARLY_COMPANY)
      .pipe(
        mergeMap(hasRole => {
          if (hasRole) {
            this.isCompanyContext = true;
            return this.userManagementService.getUserContext()
              .pipe(map(data => data.id));
          }
          return null;
        })
      );
  }

  // Take event from PartForm component
  onSubmit($event) {
    this.breaksDetailsForm = $event;

    const breaks: Breaks.Model = {
      ...this.breaksDetailsForm.value
    };

    if (this.isCompanyContext) {
      breaks.brand = this.breaksBrand;
    }

    this.createOrUpdate(breaks);
  }

  createOrUpdate(breaks: Breaks.Model) {
    let partAction;

    if (this.formAction === FormAction.CREATE) {
      partAction = this.breaksManagementService.create(breaks);
    } else {
      partAction = this.breaksManagementService.update(breaks);
    }

    partAction.subscribe(data => {
      this.messageService.showMessage('Breaks created!');
      this.submitEvent.emit(breaks);
      this.router.navigate(['/breaks', 'details', data.id, 'edit']);
    }, error => {
      this.messageService.showMessage('Create breaks failed!');
      console.log(error);
    });
  }


}
