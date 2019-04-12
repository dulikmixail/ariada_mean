import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PatientModel} from '../../_models/api/patient.model';

@Component({
  selector: 'app-patient-form-modal',
  templateUrl: './patient-form-modal.component.html',
  styleUrls: ['./patient-form-modal.component.css']
})
export class PatientFormModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PatientFormModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PatientModel) {
  }

  ngOnInit() {
  }

}
