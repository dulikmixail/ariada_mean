import {Component, OnInit} from '@angular/core';
import {PatientsService} from '../../patients.service';

@Component({
  selector: 'app-baevsky-test',
  templateUrl: './baevsky-test.component.html',
  styleUrls: ['./baevsky-test.component.css']
})
export class BaevskyTestComponent implements OnInit {
  public DB;

  constructor(private patientsService: PatientsService) {
    this.DB = this.patientsService.getEfficiencyData();
  }

  ngOnInit() {
  }

  addColumns() {
    this.DB.baevskyTest.table.map((d, i) => {
      if (i === 0) {
        d.td = d.td.concat([{value: 'до', type: 'text'}, {value: 'після', type: 'text'}, {value: '3-5хв', type: 'text'}]);
      } else {
        d.td = d.td.concat([{value: '', type: d.type}, {value: '', type: d.type}, {value: '', type: d.type}]);
      }
    });
  }

  removeColumns() {
    if (this.DB.baevskyTest.table[0].td.length <= 4) {
      return;
    }
    this.DB.baevskyTest.table.map((d) => {
      d.td = d.td.slice(0, -3);
    });
  }

  calculateColumns() {
    this.DB.baevskyTest.table[0].td.map((d, i) => {
      if (i === 0) {
        return;
      }
      this.DB.baevskyTest.table[12].td[i].value = '';
      this.DB.baevskyTest.table[13].td[i].value = '';
      this.DB.baevskyTest.table[11].td[i].value = '';
      const vik = +this.DB.baevskyTest.table[4].td[i].value.replace(',', '.') || 0;
      const zrist = +this.DB.baevskyTest.table[6].td[i].value.replace(',', '.') || 0;
      const masa = +this.DB.baevskyTest.table[7].td[i].value.replace(',', '.') || 0;
      const hateRate = +this.DB.baevskyTest.table[8].td[i].value.replace(',', '.') || 0;
      const sustola = +this.DB.baevskyTest.table[9].td[i].value.replace(',', '.') || 0;
      const diastola = +this.DB.baevskyTest.table[10].td[i].value.replace(',', '.') || 0;
      const value = 0.011 * hateRate + 0.014 * sustola + 0.008 * diastola + 0.014 * vik + 0.009 * masa - 0.009 * zrist;
      if (!value) {
        this.DB.baevskyTest.table[4].td[i].value = '';
        this.DB.baevskyTest.table[6].td[i].value = '';
        this.DB.baevskyTest.table[7].td[i].value = '';
        this.DB.baevskyTest.table[8].td[i].value = '';
        this.DB.baevskyTest.table[9].td[i].value = '';
        this.DB.baevskyTest.table[10].td[i].value = '';
        return;
      }
      this.DB.baevskyTest.table[11].td[i].value = (value - 0.27).toFixed(3);
      const result = this.DB.baevskyTest.calculate(this.DB.baevskyTest.table[11].td[i].value);
      this.DB.baevskyTest.table[12].td[i].value = result[0] || '';
      this.DB.baevskyTest.table[13].td[i].value = result[1] || '';
    });
  }

}
