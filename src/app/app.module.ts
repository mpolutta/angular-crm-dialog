import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { SampleDialogComponent } from './sample-dialog/sample-dialog.component';
import { XrmIntegrationService } from './services/xrm-integration.service';


@NgModule({
  declarations: [
    AppComponent,
    SampleDialogComponent
  ],
  entryComponents: [
    SampleDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule, MatDialogModule, MatInputModule, MatFormFieldModule,
    BrowserModule
  ],
  providers: [XrmIntegrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
