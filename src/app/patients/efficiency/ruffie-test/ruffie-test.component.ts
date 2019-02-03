import {Component, OnInit} from '@angular/core';
import {PatientsService} from '../../patients.service';

@Component({
  selector: 'app-ruffie-test',
  templateUrl: './ruffie-test.component.html',
  styleUrls: ['./ruffie-test.component.css']
})
export class RuffieTestComponent implements OnInit {
  public DB;

  constructor(private patientsService: PatientsService) {
    this.DB = this.patientsService.getEfficiencyData();
  }

  ngOnInit() {
  }

  addColumns() {
    this.DB.ruffieTest.table.map((d, i) => {
      if (i === 0) {
        d.td = d.td.concat([{value: 'ЧСС', type: 'text'}]);
      } else {
        d.td = d.td.concat([{value: '', type: d.type}]);
      }
    });
  }

  removeColumns() {
    if (this.DB.ruffieTest.table[0].td.length <= 2) {
      return;
    }
    this.DB.ruffieTest.table.map((d) => {
      d.td = d.td.slice(0, -1);
    });
  }

  calculateColumns() {
    this.DB.ruffieTest.table[0].td.map((d, i) => {
      if (i === 0) {
        return;
      }
      this.DB.ruffieTest.table[8].td[i].value = '';
      this.DB.ruffieTest.table[9].td[i].value = '';
      this.DB.ruffieTest.table[10].td[i].value = '';
      const value = ((4 * (+this.DB.ruffieTest.table[5].td[i].value / 4
        + this.DB.ruffieTest.table[6].td[i].value / 4
        + this.DB.ruffieTest.table[7].td[i].value / 4) - 200) / 10) || 0;
      const age = Math.round(+this.DB.ruffieTest.table[4].td[i].value || 0);
      if (value === -20) {
        this.DB.ruffieTest.table[5].td[i].value = '';
        this.DB.ruffieTest.table[6].td[i].value = '';
        this.DB.ruffieTest.table[7].td[i].value = '';
        if (!age) {
          this.DB.ruffieTest.table[4].td[i].value = '';
        }
        return;
      }
      if (!age) {
        this.DB.ruffieTest.table[4].td[i].value = '';
        return;
      }
      this.DB.ruffieTest.table[8].td[i].value = value.toFixed(3);

      const result = this.DB.ruffieTest.calculate(this.DB.ruffieTest.table[8].td[i].value, age);
      this.DB.ruffieTest.table[9].td[i].value = result[0] || '';
      this.DB.ruffieTest.table[10].td[i].value = result[1] || '';
    });
  }

}
