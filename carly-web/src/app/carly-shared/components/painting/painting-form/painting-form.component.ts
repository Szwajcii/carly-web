import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

import {Painting} from '../../../model/painting.model';
import {MessageService} from '../../../services/message.service';
import {FormGroupHelperService} from '../../../services/form-group-helper.service';
import {PartFormAction} from '../../../model/part-form-action.model';
import {PaintingManagementService} from '../../../resources/painting-management.service';
import {paintingDetailsFormFields} from '../painting-form-fields';

@Component({
  selector: 'app-painting-form',
  templateUrl: './painting-form.component.html',
  styleUrls: ['./painting-form.component.scss']
})
export class PaintingFormComponent implements OnInit {


  @Input() isDisabled = false;
  @Input() formAction: PartFormAction;
  @Input() paintingModel: Painting.Model;
  @Input() submitEvent: EventEmitter<Painting.Model> = new EventEmitter<Painting.Model>();
  @Input() details = false;

  paintingDetailsForm: FormGroup;
  paintingDetailsFormControls = this.formGroupService.addControlToModel(paintingDetailsFormFields);

  constructor(
    private messageService: MessageService,
    private formGroupService: FormGroupHelperService,
    private router: Router,
    private paintingManagementService: PaintingManagementService
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit($event) {
    this.paintingDetailsForm = $event;

    const painting: Painting.Model = {
      ...this.paintingDetailsForm.value
    };

    this.createOrUpdate(painting);
  }

  createOrUpdate(painting: Painting.Model) {
    let action;

    if (this.formAction === PartFormAction.CREATE) {
      action = this.paintingManagementService.create(painting);
    } else {
      action = this.paintingManagementService.update(painting);
    }

    action.subscribe(data => {
      this.messageService.showMessage('Painting created!');
      this.submitEvent.emit(painting);
      this.router.navigate(['/parts/painting', 'details', data.id, 'edit']);
    }, error => {
      this.messageService.showMessage('Create painting failed!');
      console.log(error);
    });

  }

}
