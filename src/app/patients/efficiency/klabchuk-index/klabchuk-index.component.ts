import {Component, OnInit} from '@angular/core';
import {PatientsService} from '../../patients.service';

@Component({
  selector: 'app-klabchuk-index',
  templateUrl: './klabchuk-index.component.html',
  styleUrls: ['./klabchuk-index.component.css']
})
export class KlabchukIndexComponent implements OnInit {
  public DB;

  constructor(private patientsService: PatientsService) {
    this.DB = this.patientsService.getEfficiencyData();
  }

  ngOnInit() {
  }

  addColumns() {
    this.DB.klabchukIndex.table.map((d, i) => {
      if (d.type === 'select') {
        d.td = d.td.concat([{value: 'чоловік', type: 'select', values: [{value: 'чоловік'}, {value: 'жінка'}]}]);
      } else {
        d.td = d.td.concat([{value: '', type: d.type}]);
      }
    });
  }

  removeColumns() {
    if (this.DB.klabchukIndex.table[0].td.length <= 2) {
      return;
    }
    this.DB.klabchukIndex.table.map((d) => {
      d.td = d.td.slice(0, -1);
    });
  }

  // updateSex(i, j,value){
  //   console.log(i, j, value.split(" ")[1]);
  //   this.DB.klabchukIndex.table[i].td[j].value = value.split(" ")[1];
  //   console.log(this.DB.klabchukIndex.table[i].td[j])
  // }

  calculateColumns() {
    this.DB.klabchukIndex.calculate();
  }

}
