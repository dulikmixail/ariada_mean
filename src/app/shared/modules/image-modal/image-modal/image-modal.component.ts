import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {environment} from '../../../../../environments/environment';

export interface ImageModalData {
  srcImage: string;
}

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit {
  srcNotHaveAvatar: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ImageModalData) {
  }

  ngOnInit() {
    this.srcNotHaveAvatar = environment.source.images.notHaveAvatar;
  }

}
