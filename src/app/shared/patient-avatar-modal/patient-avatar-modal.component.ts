import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


export interface PatientAvatarModalData {
  srcImage: string;
}

@Component({
  selector: 'app-patient-avatar-modal',
  templateUrl: './patient-avatar-modal.component.html',
  styleUrls: ['./patient-avatar-modal.component.css']
})
export class PatientAvatarModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PatientAvatarModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PatientAvatarModalData) {
  }

  ngOnInit() {
  }

}
