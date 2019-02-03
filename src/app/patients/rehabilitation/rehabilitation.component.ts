import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {PatientsService} from '../patients.service';

@Component({
  selector: 'app-rehabilitation',
  templateUrl: './rehabilitation.component.html',
  styleUrls: ['./rehabilitation.component.css']
})
export class RehabilitationComponent implements OnInit {

  @ViewChild('rehabilitationnav') private rehabilitationnav: ElementRef;
  // @ViewChild('rehabilitationnav') private rehabilitationnav: any;
  public DB;
  public isSamosiukVisible = undefined;
  public isPeriodsSequence = undefined;
  private rehabilitationnavElement;

  constructor(private patientsService: PatientsService, private router: Router) {
    this.DB = this.patientsService.getRehabilitationData();
  }

  ngOnInit() {
    this.rehabilitationnavElement = this.rehabilitationnav.nativeElement;
    // this.rehabilitationnavElement = this.rehabilitationnav._element.nativeElement
  }

  public nodeOfMotionChange(item, i) {
    this.DB.modeOfMotionActivityChecked = i;
    this.DB.isHealth.value = this.DB.modeOfMotionActivityChecked > 4;
    // console.log(i, this.DB.isHealth.value);
  }

  public redirectTo(j) {
    const BASE = '/patients/rehabilitation';
    const retirectTo = ['', '/morning-gymnastics', '/medical-gymnastics', '/self-exercises', '/massage', '', '', '', '/multimedia'];
    if ((j >= 1 && j <= 4) || j === 8) {
      // console.log(jquery("#rehabilitationnav").scrollTop());
      // var rehabilitationnav = document.getElementById("rehabilitationnav");
      // d3.select(this.rehabilitationnavElement).getNode().getBoundingClientRect() => v3
      // console.log(this.rehabilitationnavElement.offsetTop); //element.scrollIntoView(true)
      // window.scrollTo(0, (window.pageYOffset));
      this.router.navigate([BASE + retirectTo[j]], {fragment: 'rehabilitationnav'});
      setTimeout(() => {
        window.scrollTo(0, (this.rehabilitationnavElement.offsetTop || window.pageYOffset + 2000)); // window.pageYOffset + 2000
      }, 50);
    }
  }

  public setTherapeuticOrNeurologicalOrOrthopedicTraumatologicAndSurgical() {
    let therapeuticCount = 0;
    let neurologicalCount = 0;
    let orthopedicTraumatologicAndSurgicalCount = 0;
    this.DB.therapeuticGroupTable.map((d) => {
      if (d.checked) {
        therapeuticCount++;
      }
    });
    this.DB.neurologicalGroupTable.map((d) => {
      if (d.checked) {
        neurologicalCount++;
      }
    });
    this.DB.orthopedicTraumatologicAndSurgicalGroupTable.map((d) => {
      if (d.checked) {
        orthopedicTraumatologicAndSurgicalCount++;
      }
    });
    if (therapeuticCount > neurologicalCount && therapeuticCount > orthopedicTraumatologicAndSurgicalCount) {
      this.DB.therapeuticGroupChecked = true;
      this.DB.neurologicalGroupChecked = undefined;
      this.DB.orthopedicTraumatologicAndSurgicalGroupChecked = undefined;
      return;
    }
    if (neurologicalCount > therapeuticCount && neurologicalCount > orthopedicTraumatologicAndSurgicalCount) {
      this.DB.therapeuticGroupChecked = undefined;
      this.DB.neurologicalGroupChecked = true;
      this.DB.orthopedicTraumatologicAndSurgicalGroupChecked = undefined;
      return;
    }
    if (orthopedicTraumatologicAndSurgicalCount > neurologicalCount && orthopedicTraumatologicAndSurgicalCount > therapeuticCount) {
      this.DB.therapeuticGroupChecked = undefined;
      this.DB.neurologicalGroupChecked = undefined;
      this.DB.orthopedicTraumatologicAndSurgicalGroupChecked = true;
      return;
    }
    this.DB.therapeuticGroupChecked = undefined;
    this.DB.neurologicalGroupChecked = undefined;
    this.DB.orthopedicTraumatologicAndSurgicalGroupChecked = undefined;
  }

  public therapeuticGroupChange(item) {
    item.checked = !item.checked;
    // console.log(item, this.DB.therapeuticGroupTable)
    this.setTherapeuticOrNeurologicalOrOrthopedicTraumatologicAndSurgical();
  }

  public neurologicalGroupChange(item) {
    item.checked = !item.checked;
    this.setTherapeuticOrNeurologicalOrOrthopedicTraumatologicAndSurgical();
  }

  public orthopedicTraumatologicAndSurgicalGroupChange(item) {
    item.checked = !item.checked;
    this.setTherapeuticOrNeurologicalOrOrthopedicTraumatologicAndSurgical();
  }

  public changeFormsOfProcedureHealthTable() {
    this.DB.formsOfProcedureHealthTableActive = false;
    this.DB.formsOfProcedureHealthTable.map((d) => {
      if (d.td[3] || d.td[5] || d.td[7] || d.td[9]) {
        this.DB.formsOfProcedureHealthTableActive = true;
      }
    });
  }

  public updateFormsOfProcedureHealthTable(j) {
    // console.log(j, this.DB.LFK[j]);
    const index = (this.DB.modeOfMotionActivityChecked - 4);
    // let exercise = this.DB.stepFourTableHealth[0].td[j];
    this.DB.formsOfProcedureHealthTableActive = false;
    this.DB.formsOfProcedureHealthTable.map((d) => {
      if (d.indexLFK === j) { // exercise===d.td[0] &&
        if (index === 1) {
          d.td[3] = this.DB.LFK[j];
          // d.td[INDEX+2] = 0;//1=>3, 2=>4 4=>6
          // "","Кут підйому","До 5",false,"5-10",false,"До 15",false,"Більш 15",false 1=>4, 2=>6
        }
        if (index === 2) {
          d.td[5] = this.DB.LFK[j];
        }
        if (index === 3) {
          d.td[7] = this.DB.LFK[j];
        }
        if (index === 4) {
          d.td[9] = this.DB.LFK[j];
        }
        if (this.DB.LFK[j]) {
          this.DB.formsOfProcedureHealthTableActive = true;
        }
      }
    });
  }

  public addFormsOfProcedureHealthTableRow() {
    this.DB.formsOfProcedureHealthTable.push({
      checked: false,
      index: this.DB.formsOfProcedureHealthTable.length,
      edit: true,
      tr0: '',
      td: ['', '', '', false, '', false, '', false, '', false]
    });
    // console.log(this.DB.formsOfProcedureHealthTable);
  }

  // public deleteFormsOfProcedureHealthTableRow() {
  //   this.DB.formsOfProcedureHealthTable = this.DB.formsOfProcedureHealthTable.slice(0, -1);
  // }

}
