import {Component, Input, OnInit} from '@angular/core';
import {PatientModel} from '../../../../_models';
import {AvatarHelper} from '../../../../_helpers/avatar-helper';
import {ImageModalComponent} from '../../image-modal';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  @Input() patient: PatientModel = new PatientModel();
  @Input() size: number;
  avatar: string;

  constructor(private ah: AvatarHelper,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.avatar = this.ah.buildSrc(this.patient.photo);
  }

  preview() {
    if (this.patient.photo) {
      this.dialog.open(ImageModalComponent, {
        data: {srcImage: this.avatar}
      });
    }
  }
}
