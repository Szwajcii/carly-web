import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormGroupHelperService} from '../../../../services/form-group-helper.service';
import {FormGroupHelper} from '../../../../model/form-group-helper.model';

@Component({
  selector: 'app-verify-payment-card-dialog',
  templateUrl: './verify-payment-card-dialog.component.html',
  styleUrls: ['./verify-payment-card-dialog.component.scss']
})
export class VerifyPaymentCardDialogComponent implements OnInit {

  private static CVV_CODE = 'cvvCode';

  generalForm: FormGroup;
  gridColumns = 4;

  cvvCodeDetailsForm: FormGroup;
  cvvCodeDetailsFormControls: FormGroupHelper.ModelControl[];

  cvvCodeField: FormGroupHelper.Model = {
    inputName: 'cvvCode',
    label: 'CVV code',
    validators: [Validators.required],
    type: 'text',
    cols: 4,
    rows: 1
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<VerifyPaymentCardDialogComponent>,
    private formBuilder: FormBuilder,
    private formGroupService: FormGroupHelperService
  ) {
  }

  ngOnInit(): void {
    this.cvvCodeDetailsFormControls = this.formGroupService.addControlToModel([this.cvvCodeField]);

    this.cvvCodeDetailsForm = this.formBuilder.group({
      ...this.formGroupService.getControlsFromModel(this.cvvCodeDetailsFormControls)
    });

    this.generalForm = this.formBuilder.group({
      cvvCodeDetailsForm: this.cvvCodeDetailsForm
    });
  }

  onSubmit() {
    const cvvCode = this.cvvCodeDetailsForm.get(VerifyPaymentCardDialogComponent.CVV_CODE).value;
    this.dialogRef.close(cvvCode);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
