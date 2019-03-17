import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MemoizedSelector} from '@ngrx/store';
import {AppState} from '../../store';
import {TitleModel} from '../../_models/api/title.model';
import {FormFile} from '../../_helpers/form-files';


export class BaseFormModel {
  title: string;
  form: FormGroup;
  files: BaseFormModelFile[];
  select: BaseFormModelSelect[];
  avatar: BaseFormModelAvatar;
  headerTitle: BaseFormModelHeader;
  headerSubTitle: BaseFormModelHeader;
}

export class BaseFormModelFile {
  control: BaseFormModelControl;
  acceptTypes: AcceptFormTypes[];
}

export class BaseFormModelControl {
  name: string;
}

export enum AcceptFormTypes {
  ImageAll = 'image/*',
  ImagePng = 'image/png',
  ImageJpeg = 'image/jpeg'
}

export class BaseFormModelSelect {
  control: BaseFormModelControl;
  selector: MemoizedSelector<AppState, TitleModel>;
}

export class BaseFormModelAvatar {
  control: BaseFormModelControl;
  file: FormFile;
}

export class BaseFormModelHeader {
  controls: BaseFormModelControl[];
}

@Component({
  selector: 'app-base-form-model',
  templateUrl: './base-form-model.component.html',
  styleUrls: ['./base-form-model.component.css']
})
export class BaseFormModelComponent implements OnInit {
  @Input() model: BaseFormModel;
  buildFile: BaseFormModelFile;
  buildSelect: BaseFormModelSelect;

  constructor() {
  }

  ngOnInit() {

  }

  getControlNames(): string[] {
    return Object.getOwnPropertyNames(this.model.form.controls);
  }

  tryBuildFileInput(controlName: string): boolean {
    this.model.files.forEach(file => {
      if (file.control.name === controlName) {
        this.buildFile = file;
        return true;
      }
    });
    this.buildFile = undefined;
    return false;
  }


}
