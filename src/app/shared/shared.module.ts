import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientFormComponent} from './patient-form/patient-form.component';
import {PatientListComponent} from './patient-list/patient-list.component';
import {EmployeeFormComponent} from './employee-form/employee-form.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatChipsModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatRippleModule,
  MatSelectModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BranchFormComponent} from './branch-form/branch-form.component';
import {PostFormComponent} from './post-form/post-form.component';
import {BranchListComponent} from './branch-list/branch-list.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {FormCardActionsComponent} from './form-card-actions/form-card-actions.component';
import {FormUploadButtonComponent} from './form-upload-button/form-upload-button.component';
import {BaseTitleFormComponent} from './base-title-form/base-title-form.component';
import {BaseTitleListComponent} from './base-title-list/base-title-list.component';
import {PostListComponent} from './post-list/post-list.component';
import {PatientFormModalComponent} from './patient-form-modal/patient-form-modal.component';
import {PatientSearchPanelComponent} from './patient-search-panel/patient-search-panel.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PatientCardComponent} from './patient-card/patient-card.component';
import { PatientCardInfoComponent } from './patient-card-info/patient-card-info.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [
    PatientFormComponent,
    PatientListComponent,
    EmployeeFormComponent,
    BranchFormComponent,
    PostFormComponent,
    BranchListComponent,
    EmployeeListComponent,
    FormCardActionsComponent,
    FormUploadButtonComponent,
    BaseTitleFormComponent,
    BaseTitleListComponent,
    PostListComponent,
    PatientFormModalComponent,
    PatientSearchPanelComponent,
    PatientCardComponent,
    PatientCardInfoComponent,
    AvatarComponent,
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    MatAutocompleteModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatExpansionModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
  exports: [
    PatientFormComponent,
    PatientFormModalComponent,
    PatientListComponent,
    EmployeeFormComponent,
    BranchFormComponent,
    PostFormComponent,
    PatientSearchPanelComponent,
    PatientCardInfoComponent
  ],
  entryComponents: [
    PatientFormModalComponent
  ]
})
export class SharedModule {
}
