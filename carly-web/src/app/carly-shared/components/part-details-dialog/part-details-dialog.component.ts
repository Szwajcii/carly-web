import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-part-details-dialog',
  templateUrl: './part-details-dialog.component.html',
  styleUrls: ['./part-details-dialog.component.scss']
})
export class PartDetailsDialogComponent implements OnInit {

  partType: string;
  partPreview: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.partPreview = this.data.partPreview;
    this.partType = this.data.partType;
  }

}
