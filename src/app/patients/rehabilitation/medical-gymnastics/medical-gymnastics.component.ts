import {Component, OnInit} from '@angular/core';
import {PatientsService} from '../../patients.service';

@Component({
  selector: 'app-medical-gymnastics',
  templateUrl: './medical-gymnastics.component.html',
  styleUrls: ['./medical-gymnastics.component.css']
})
export class MedicalGymnasticsComponent implements OnInit {
  public DB;

  constructor(private patientsService: PatientsService) {
    this.DB = this.patientsService.getRehabilitationData();
  }

  ngOnInit() {
  }

  public addMedicalGymnasticsPatientCardTableRow() {
    this.DB.medicalGymnastics.patientCardTable.map((d) => {
      d.td.push('');
    });
  }

  public removeMedicalGymnasticsPatientCardTableRow() {
    // console.log(this.DB.medicalGymnasticsPatientCardTable);
    this.DB.medicalGymnastics.patientCardTable.map((d) => {
      if (d.td.length > 2) {
        d.td = d.td.slice(0, -1);
      }
    });
  }

}
