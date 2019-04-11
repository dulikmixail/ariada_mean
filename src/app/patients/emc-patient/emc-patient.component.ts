import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-emc-patient',
  templateUrl: './emc-patient.component.html',
  styleUrls: ['./emc-patient.component.css']
})
export class EmcPatientComponent implements OnInit {
  loading = false;
  constructor() {
  }

  ngOnInit() {
    this.loading = true;
  }


}
