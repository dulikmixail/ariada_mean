import {Component, Input, OnInit} from '@angular/core';
import {PatientModel} from '../../_models/api/patient.model';
import {FormFile} from '../../_helpers';
import {environment} from '../../../environments/environment';
import {ImageModalComponent} from '../image-modal/image-modal.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-patient-card-info-full',
  templateUrl: './patient-card-info-full.component.html',
  styleUrls: ['./patient-card-info-full.component.css']
})
export class PatientCardInfoFullComponent implements OnInit {
  @Input() patient: PatientModel;
  avatarFile: FormFile;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    this.avatarFile = new FormFile();
    this.avatarFile.srcNotHave = environment.source.images.notHaveAvatar;
    if (this.patient.photo) {
      this.avatarFile.src = `${environment.srcImages}/${this.patient.photo}`;
    }
  }

  openDialog(): void {
    this.dialog.open(ImageModalComponent, {
      data: {srcImage: this.avatarFile.src}
    });
  }

  fixEmpty(value: any) {
    return !value ? '' : typeof value === 'string' ? value : '';
  }

}
