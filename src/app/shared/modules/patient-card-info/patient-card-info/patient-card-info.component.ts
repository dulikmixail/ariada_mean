import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material';

import {PatientModel} from '../../../../_models';
import {PatientCardInfoFullModalComponent} from '../../patient-card-info-full-modal';

@Component({
  selector: 'app-patient-card-info',
  templateUrl: './patient-card-info.component.html',
  styleUrls: ['./patient-card-info.component.css']
})
export class PatientCardInfoComponent implements OnInit {
  readonly DEFAULT_SIZE = 40;

  @Input() patient: PatientModel;
  @Input() size: number;

  @Output() clickPatient = new EventEmitter<PatientModel>();

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    if (!this.size) {
      this.size = this.DEFAULT_SIZE;
    }
  }

  openDialog() {
    this.dialog.open(PatientCardInfoFullModalComponent, {
      data: this.patient
    });
  }
}
