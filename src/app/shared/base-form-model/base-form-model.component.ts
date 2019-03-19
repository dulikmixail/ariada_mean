import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {TitleModel} from '../../_models/api/title.model';
import {FormFile} from '../../_helpers/form-files';
import {Observable} from 'rxjs';


export class BaseFormModel {
  title: string;
  headerTitle: BaseFormModelHeader;
  headerSubTitle: BaseFormModelHeader;
  controls: BaseFormModelControl[];
  avatar: BaseFormModelAvatar;
}

export class BaseFormModelControl {
  name: string;
  placeholder: string;
  type: BaseFormModelTypes;
  file: BaseFormModelFile;
  select: BaseFormModelSelect;
}


export class BaseFormModelFile {
  acceptTypes: BaseFromAcceptTypes[];
  file: FormFile;
  icon: BaseFormIcon;
  button: BaseFromUploadButton;
}

export class BaseFormIcon {
  name: string;
}

export class BaseFromUploadButton {
  text: string;
}

export class BaseFormModelSelect {
  selector$: Observable<TitleModel>;
}

export class BaseFormControl {
  name: string;
}

export enum BaseFromAcceptTypes {
  ImageAll = 'image/*',
  ImagePng = 'image/png',
  ImageJpeg = 'image/jpeg'
}

export class BaseFormModelAvatar {
  file: FormFile;
}

export class BaseFormModelHeader {
  controls: BaseFormControl[];
}

export enum BaseFormModelTypes {
  Input,
  File,
  Select
}

export class BaseFormBuildModel {
  controls: BaseFormModelControl [];
}

export class BaseFormBuildFile {
  acceptTypes: BaseFromAcceptTypes[];
  file: FormFile;
}


@Component({
  selector: 'app-base-form-model',
  templateUrl: './base-form-model.component.html',
  styleUrls: ['./base-form-model.component.css']
})
export class BaseFormModelComponent implements OnInit {
  @Input() model: BaseFormModel;
  @Input() form: FormGroup;


  constructor() {
  }

  ngOnInit() {

  }



}
