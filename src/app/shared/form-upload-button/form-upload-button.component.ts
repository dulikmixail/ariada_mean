import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-upload-button',
  templateUrl: './form-upload-button.component.html',
  styleUrls: ['./form-upload-button.component.css']
})
export class FormUploadButtonComponent implements OnInit {
  @Input() fileInput: HTMLInputElement;
  @Input() matIconName: string;
  @Input() textButton: string;

  constructor() {
  }

  ngOnInit() {
  }

}
