import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { XrmIntegrationService } from '../services/xrm-integration.service';

@Component({
  selector: 'app-sample-dialog',
  templateUrl: './sample-dialog.component.html',
  styleUrls: ['./sample-dialog.component.css']
})
export class SampleDialogComponent implements OnInit {
  sampleInput = '';
  parentEntityId = '';

  constructor(
    public dialogRef: MatDialogRef<SampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dlgData: any,
    private xrmIntegrationSvc: XrmIntegrationService
  ) {
  }

  ngOnInit() {
    const parentXrm = this.xrmIntegrationSvc.getParentXrm();
    if (parentXrm !== null) {
      this.parentEntityId = parentXrm.Page.data.entity.getId();
    } else {
      this.parentEntityId = 'No XRM Integration';
    }
  }

  isValidInput(): boolean {
    return this.sampleInput.length === 0;
  }
  saveSampleInput() {
    this.dlgData.sampleInput = this.sampleInput;
    this.dialogRef.close(this.dlgData);
  }
  cancelSampleInput() {
    this.dialogRef.close(this.dlgData);
  }
}
