import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PatientsService} from '../patients.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-efficiency',
  templateUrl: './efficiency.component.html',
  styleUrls: ['./efficiency.component.css']
})
export class EfficiencyComponent implements OnInit {
  @ViewChild('efficiencynav') private efficiencynav: ElementRef;
  public DB;
  private efficiencynavElement;

  constructor(private patientsService: PatientsService, private router: Router) {
    this.DB = this.patientsService.getEfficiencyData();
  }

  ngOnInit() {
    this.efficiencynavElement = this.efficiencynav.nativeElement;
  }

}
