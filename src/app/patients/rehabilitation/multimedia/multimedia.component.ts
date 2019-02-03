import {Component, OnInit} from '@angular/core';
import {PatientsService} from '../../patients.service';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css']
})
export class MultimediaComponent implements OnInit {
  public DB;

  constructor(private patientsService: PatientsService) {
    this.DB = this.patientsService.getRehabilitationData();

  }

  ngOnInit() {
  }

}
