import {Component, OnInit} from '@angular/core';
import {PatientsService} from '../../patients.service';

@Component({
  selector: 'app-self-exercises',
  templateUrl: './self-exercises.component.html',
  styleUrls: ['./self-exercises.component.css']
})
export class SelfExercisesComponent implements OnInit {
  public DB;

  constructor(private patientsService: PatientsService) {
    this.DB = this.patientsService.getRehabilitationData();
  }

  ngOnInit() {
  }

  public addSelfExercisesPatientCardTableRow() {
    this.DB.selfExercises.patientCardTable.map((d) => {
      d.td.push('');
    });
  }

  public removeSelfExercisesPatientCardTableRow() {
    // console.log(this.DB.medicalGymnasticsPatientCardTable);
    this.DB.selfExercises.patientCardTable.map((d) => {
      if (d.td.length > 2) {
        d.td = d.td.slice(0, -1);
      }
    });
  }

  // public byType(item1,item2){
  //   // if (item1 && item2 && item1.name && item2.name){
  //     return item1.name == item2.name;
  //   // } else if (item1 && item1.name && item2){
  //   //   return item1.name == item2;
  //   // } else if (item2 && item1 && item2.name){
  //   //   return item1 == item2.name;
  //   // }
  //   // return false;
  // }

}
