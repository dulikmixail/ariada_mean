import {Component, OnInit} from '@angular/core';
import {PatientsService} from '../../patients.service';

@Component({
  selector: 'app-morning-gymnastics',
  templateUrl: './morning-gymnastics.component.html',
  styleUrls: ['./morning-gymnastics.component.css']
})
export class MorningGymnasticsComponent implements OnInit {
  public DB;

  constructor(private patientsService: PatientsService) {
    this.DB = this.patientsService.getRehabilitationData();
  }

  ngOnInit() {
  }

}
