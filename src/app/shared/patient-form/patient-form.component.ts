import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {GenderModel} from '../../_models/api/gender.model';
import {FormFile, FormFiles, FormHelper} from '../../_helpers';
import {MatDialog} from '@angular/material';
import {FormGroupConverter} from '../../_helpers';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {environment} from '../../../environments/environment';
import {selectGenderList} from '../../store/services/gender-service/gender-service.selector';
import {LoadGenders} from '../../store/services/gender-service/gender-service.actions';
import {ImageModalComponent} from '../image-modal/image-modal.component';
import {AddPatient} from '../../store/services/patient-service/patient-service.actions';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  form: FormGroup;
  genders$: Observable<GenderModel[]>;
  avatarFile: FormFile;

  constructor(private dialog: MatDialog,
              private formBuilder: FormBuilder,
              private formGroupConverter: FormGroupConverter,
              private formFiles: FormFiles,
              private store: Store<AppState>,
              private formService: FormHelper) {
  }

  ngOnInit() {
    this.createForm();
    this.avatarFile = new FormFile();
    this.avatarFile.srcNotHave = environment.source.images.notHaveAvatar;
    this.genders$ = this.store.pipe(select(selectGenderList));
    this.store.dispatch(new LoadGenders());
  }

  createForm() {
    this.form = this.formBuilder.group({
      photo: [''],
      surname: ['1', Validators.required],
      name: ['2', Validators.required],
      middleName: ['3', Validators.required],
      birthDate: [''],
      permanentResidence: '',
      addressOfRelativesAndFamily: '',
      phoneNumbers: ['3', Validators.required],
      medicalCardNumber: '',
      workplace: '',
      workPost: '',
      gender: ['5c90293c45ef1416bb30febf', Validators.required]
    });
  }

  onFileChange(event) {
    this.formFiles.loadImage(
      {
        images: event.target.files,
        form: this.form,
        formFile: this.avatarFile
      },
      'photo'
    ).catch(() => {
      this.avatarFile.reset();
    }).then((file: File) => {
      this.previewAvatar(file);
    });
  }

  openDialog(): void {
    this.dialog.open(ImageModalComponent, {
      data: {srcImage: this.avatarFile.src}
    });
  }

  onSubmit(ngForm: NgForm) {
    this.formService.submitPromise(ngForm, this.form, AddPatient)
      .then(() => this.resetForm())
      .catch(() => {
      });
  }

  resetForm() {
    this.avatarFile.reset();
    this.form.reset();
  }

  previewAvatar(file) {
    this.formFiles.loadSource(this.avatarFile, file);
  }
}
