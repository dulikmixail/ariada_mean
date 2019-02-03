import {Component, OnInit} from '@angular/core';
import {PatientsService} from '../../patients.service';

@Component({
  selector: 'app-sbp-hr',
  templateUrl: './sbp-hr.component.html',
  styleUrls: ['./sbp-hr.component.css']
})
export class SbpHrComponent implements OnInit {
  public DB;

  constructor(private patientsService: PatientsService) {
    this.DB = this.patientsService.getEfficiencyData();
  }

  ngOnInit() {
  }

  addColumns() {
    this.DB.sbpHr.table.map((d, i) => {
      if (i === 0) {
        d.td = d.td.concat([{value: 'до', type: 'text'}, {value: 'після', type: 'text'}]);
      } else {
        d.td = d.td.concat([{value: '', type: d.type, colspan: d.colspan}, {value: '', type: d.type, colspan: d.colspan}]);
      }
    });
  }

  removeColumns() {
    if (this.DB.sbpHr.table[0].td.length <= 3) {
      return;
    }
    this.DB.sbpHr.table.map((d) => {
      d.td = d.td.slice(0, -2);
    });
  }

  calculateColumns() {
    let i = 1;
    for (i = 1; i <= this.DB.sbpHr.table[0].td.length - 1; i = 1 + 2) {
      this.DB.sbpHr.table[6].td[i].value = '';
      this.DB.sbpHr.table[7].td[i].value = '';
      this.DB.sbpHr.table[8].td[i].value = '';
      this.DB.sbpHr.table[9].td[i].value = '';
      this.DB.sbpHr.table[10].td[i].value = '';
      const sustolaB = +this.DB.sbpHr.table[5].td[i].value || 0;
      const sustolaA = +this.DB.sbpHr.table[5].td[i + 1].value || 0;
      const hateRateB = +this.DB.sbpHr.table[4].td[i].value || 0;
      const hateRateA = +this.DB.sbpHr.table[4].td[i + 1].value || 0;

      const pokaznukBai1 = (100 * (sustolaA - sustolaB) / sustolaB) || 0; // СТ = 100 * (СТр - СТсп) / СТсп
      const pokaznukBai2 = (100 * (hateRateA - hateRateB) / hateRateB) || 0; // ЧСС = 100 * (ЧССр - ЧССсп) / ЧССсп.

      const value = 100 * (pokaznukBai1 - pokaznukBai2) / pokaznukBai1 || 0;
      if (!value) {
        this.DB.sbpHr.table[5].td[i].value = '';
        this.DB.sbpHr.table[4].td[i].value = '';
        this.DB.sbpHr.table[5].td[i + 1].value = '';
        this.DB.sbpHr.table[4].td[i + 1].value = '';
        return;
      }
      this.DB.sbpHr.table[7].td[i].value = pokaznukBai1.toFixed(3);
      this.DB.sbpHr.table[6].td[i].value = pokaznukBai2.toFixed(3);
      const result = this.DB.sbpHr.calculate(value);
      this.DB.sbpHr.table[8].td[i].value = result[0] || '';
      this.DB.sbpHr.table[9].td[i].value = result[1] || '';
      this.DB.sbpHr.table[10].td[i].value = result[2] || '';
    }
  }

}
