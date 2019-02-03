import {Component, OnInit} from '@angular/core';
import {PatientsService} from '../../patients.service';

@Component({
  selector: 'app-apanasenko-test',
  templateUrl: './apanasenko-test.component.html',
  styleUrls: ['./apanasenko-test.component.css']
})
export class ApanasenkoTestComponent implements OnInit {
  public DB;

  constructor(private patientsService: PatientsService) {
    this.DB = this.patientsService.getEfficiencyData();
  }

  ngOnInit() {
  }

  addColumns() {
    this.DB.apanasenkoTest.table.map((d, i) => {
      if (d.type === 'select') {
        d.td = d.td.concat([{value: 'чоловік', type: 'select', values: [{value: 'чоловік'}, {value: 'жінка'}]}]);
      } else {
        d.td = d.td.concat([{value: '', type: d.type}]);
      }
    });
  }

  removeColumns() {
    if (this.DB.apanasenkoTest.table[0].td.length <= 2) {
      return;
    }
    this.DB.apanasenkoTest.table.map((d) => {
      d.td = d.td.slice(0, -1);
    });
  }

  // updateSex(i, j,value){
  //   console.log(i, j, value.split(" ")[1]);
  //   this.DB.apanasenkoTest.table[i].td[j].value = value.split(" ")[1];
  //   console.log(this.DB.apanasenkoTest.table[i].td[j])
  // }

  calculateColumns() {
    // console.log(this.DB.apanasenkoTest.table[3].td[1])
    this.DB.apanasenkoTest.calculate();
  }

}
