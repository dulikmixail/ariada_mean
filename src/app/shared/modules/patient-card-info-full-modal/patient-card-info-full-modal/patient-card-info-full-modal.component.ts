import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PatientModel} from '../../../../_models';

@Component({
  selector: 'app-patient-card-info-full-modal',
  templateUrl: './patient-card-info-full-modal.component.html',
  styleUrls: ['./patient-card-info-full-modal.component.css']
})
export class PatientCardInfoFullModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PatientCardInfoFullModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PatientModel) {
  }

  ngOnInit() {
  }

}
