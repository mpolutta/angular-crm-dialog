import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SampleDialogComponent } from './sample-dialog/sample-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputFromDialog = '';

  constructor( public dialog: MatDialog ) {}
  openSampleDialog(): void {
    const multiAssignDlg = this.dialog.open(SampleDialogComponent, {
      data: { sampleInput: this.inputFromDialog }
    });
    multiAssignDlg.afterClosed().subscribe(res => {
      // Collect data output from Dialog
      if (res && res.sampleInput) {
        this.inputFromDialog = res.sampleInput;
      }
    });
  }
}
