import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {Observable} from 'rxjs';
import {PatientModel} from '../../_models/api/patient.model';
import {selectPatientList} from '../../store/services/patient-service/patient-service.selector';
import {DeletePatient, LoadPatients} from '../../store/services/patient-service/patient-service.actions';
import {environment} from '../../../environments/environment';
import {MatDialog} from '@angular/material';
import {ImageModalComponent} from '../image-modal/image-modal.component';
import {PatientFormComponent} from '../patient-form/patient-form.component';
import {Overlay} from '@angular/cdk/overlay';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients$: Observable<PatientModel[]>;
  srcImages: string;
  srcNotHaveAvatar: string;

  constructor(
    private dialog: MatDialog,
    private store: Store<AppState>) {
  }

  ngOnInit() {
    this.srcImages = environment.srcImages;
    this.patients$ = this.store.pipe(select(selectPatientList));
    this.store.dispatch(new LoadPatients());

    this.srcNotHaveAvatar = environment.source.images.notHaveAvatar;
  }

  openDialog(patient: PatientModel): void {
    this.dialog.open(ImageModalComponent, {
      data: {srcImage: this.getSrcAvatar(patient)}
    });
  }

  getSrcAvatar(patient: PatientModel): string {
    // const src = this.fileService.downloadByName(patient.photo).subscribe(blob => {
    //   console.log(this._window.URL.createObjectURL(blob));
    // });
    return `${this.srcImages}/${patient.photo}`;
  }

  deletePatient(patient: PatientModel) {
    this.store.dispatch(new DeletePatient(patient));
  }

  editPatient(patient: PatientModel) {
    this.dialog.open(PatientFormComponent, {
      data: patient,
      maxHeight: '90vh',
      maxWidth: 600
    });
  }
}
