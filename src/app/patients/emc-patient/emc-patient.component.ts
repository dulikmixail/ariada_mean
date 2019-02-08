import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {InfoModalComponent} from '../../shared/info-modal/info-modal.component';

@Component({
  selector: 'app-emc-patient',
  templateUrl: './emc-patient.component.html',
  styleUrls: ['./emc-patient.component.css']
})
export class EmcPatientComponent implements OnInit {

  avatar;

  constructor(public dialog: MatDialog) {
    this.avatar = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
  }

  ngOnInit() {

  }

  openDialog(): void {
    this.dialog.open(InfoModalComponent);
  }

}
