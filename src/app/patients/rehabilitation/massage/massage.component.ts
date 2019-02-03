import {Component, OnInit, ViewChild} from '@angular/core';
import {PatientsService} from '../../patients.service';

@Component({
  selector: 'app-massage',
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.css']
})
export class MassageComponent implements OnInit {
  @ViewChild('select') selectElRef;
  public DB;

  constructor(private patientsService: PatientsService) {
    this.DB = this.patientsService.getRehabilitationData();
  }

  ngOnInit() {
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  updateContraindications(value) {
    // console.log(value);
    const selected = [];
    const options = this.selectElRef.nativeElement.options;
    for (let i = 0; i < options.length; i++) {// error options.map((d,i)=>{
      if (options[i].selected) {
        selected.push(i);
      }
    }
    this.DB.massage.stepOneContraindications.selected = selected.filter(this.onlyUnique);
    const max = Math.max(...this.DB.massage.stepOneContraindications.selected);
    this.DB.massage.stepOneContraindications.max = max;
    // console.log(this.DB.massage.stepOneContraindications);
    if (max === 0) {
      this.DB.massage.stepOneContraindications.checked = 0;
    } else if (max >= 1 && max <= 18) {
      this.DB.massage.stepOneContraindications.checked = 1;
    } else if (max >= 19 && max <= 27) {
      this.DB.massage.stepOneContraindications.checked = 2;
    } else { // (flag>=28)
      this.DB.massage.stepOneContraindications.checked = 3;
    }
  }

  setCalmingOrStimulating() {
    this.DB.massage.setCalmingOrStimulating();
  }

  updateCalmingOrStimulatingCount() {
    this.DB.massage.updateCalmingOrStimulatingCount();
  }

  calculateTableTenSelectedItems() {
    let unit = 0;
    let duration = 0;
    const length = this.DB.massage.tableTen.length;
    this.DB.massage.tableTen.map((d, i) => {
      if (i === 0 || i === length - 1) {
        return;
      }
      if (d.checked) {
        unit = unit + +d.td[1];
        duration = duration + +d.td[2];
      }
    });
    this.DB.massage.tableTen[length - 1].td[1] = unit;
    this.DB.massage.tableTen[length - 1].td[2] = duration;
  }

}
