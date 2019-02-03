import {Component, OnInit} from '@angular/core';
import {PatientsService} from '../../patients.service';

@Component({
  selector: 'app-kerdo-index',
  templateUrl: './kerdo-index.component.html',
  styleUrls: ['./kerdo-index.component.css']
})
export class KerdoIndexComponent implements OnInit {
  public DB;

  constructor(private patientsService: PatientsService) {
    this.DB = this.patientsService.getEfficiencyData();
  }

  ngOnInit() {
  }

  addColumns() {
    this.DB.kerdoIndex.table.map((d, i) => {
      if (i === 0) {
        d.td = d.td.concat([{value: 'до', type: 'text'}, {value: 'після', type: 'text'}, {value: '3-5хв', type: 'text'}]);
      } else {
        d.td = d.td.concat([{value: '', type: d.type}, {value: '', type: d.type}, {value: '', type: d.type}]);
      }
    });
  }

  removeColumns() {
    if (this.DB.kerdoIndex.table[0].td.length <= 4) {
      return;
    }
    this.DB.kerdoIndex.table.map((d) => {
      d.td = d.td.slice(0, -3);
    });
  }

  calculateColumns() {
    this.DB.kerdoIndex.table[0].td.map((d, i) => {
      if (i === 0) {
        return;
      }
      this.DB.kerdoIndex.table[6].td[i].value = '';
      this.DB.kerdoIndex.table[7].td[i].value = '';
      const diastola = +this.DB.kerdoIndex.table[5].td[i].value.replace(',', '.') || 0;
      const hateRate = +this.DB.kerdoIndex.table[4].td[i].value.replace(',', '.') || 0;
      const value = (1 - diastola / hateRate) * 100;
      if (!value) {
        this.DB.kerdoIndex.table[5].td[i].value = '';
        this.DB.kerdoIndex.table[4].td[i].value = '';
        return;
      }
      this.DB.kerdoIndex.table[6].td[i].value = value.toFixed(3);
      const result = this.DB.kerdoIndex.calculate(this.DB.kerdoIndex.table[6].td[i].value);
      this.DB.kerdoIndex.table[7].td[i].value = result || '';
    });
  }

}
