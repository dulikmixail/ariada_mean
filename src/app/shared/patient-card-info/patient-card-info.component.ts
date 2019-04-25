import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PatientModel} from '../../_models/api/patient.model';
import {MatDialog} from '@angular/material';
import {PatientCardInfoFullModalComponent} from '../patient-card-info-full-modal/patient-card-info-full-modal.component';

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
