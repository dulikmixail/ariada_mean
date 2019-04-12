import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {PatientModel} from '../../_models/api/patient.model';
import {ImageModalComponent} from '../image-modal/image-modal.component';
import {DeletePatient} from '../../store/services/patient-service/patient-service.actions';
import {PatientFormModalComponent} from '../patient-form-modal/patient-form-modal.component';
import {MatDialog} from '@angular/material';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {
  @Input() patient: PatientModel;
  srcImages: string;
  srcNotHaveAvatar: string;
  constructor(private dialog: MatDialog,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.srcImages = environment.srcImages;
    this.srcNotHaveAvatar = environment.source.images.notHaveAvatar;
  }

  getSrcAvatar(patient: PatientModel): string {
    return `${this.srcImages}/${patient.photo}`;
  }

  openDialog(patient: PatientModel): void {
    this.dialog.open(ImageModalComponent, {
      data: {srcImage: this.getSrcAvatar(patient)}
    });
  }

  deletePatient(patient: PatientModel) {
    this.store.dispatch(new DeletePatient(patient));
  }

  editPatient(patient: PatientModel) {
    this.dialog.open(PatientFormModalComponent, {
      data: patient,
      maxHeight: '90vh',
      maxWidth: 600
    });
  }

}
