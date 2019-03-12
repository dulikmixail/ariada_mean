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
      data: {srcImage: this.buildSrcAvatar(patient)}
    });
  }

  buildSrcAvatar(patient: PatientModel): string {
    return `${this.srcImages}/${patient.photo}`;
  }

  deletePatient(patient: PatientModel) {
    this.store.dispatch(new DeletePatient(patient));
  }
}
