import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {GenderModel} from '../../_models/api/gender.model';
import {FormFile, FormFiles, SnackBar} from '../../_helpers';
import {MatDialog} from '@angular/material';
import {FormGroupConverter} from '../../_helpers';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {environment} from '../../../environments/environment';
import {selectGenderList} from '../../store/services/gender-service/gender-service.selector';
import {LoadGenders} from '../../store/services/gender-service/gender-service.actions';
import {ImageModalComponent} from '../image-modal/image-modal.component';
import {AddPatient, PatientServiceActionTypes} from '../../store/services/patient-service/patient-service.actions';
import {Actions, ofType} from '@ngrx/effects';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  genders$: Observable<GenderModel[]>;
  avatarFile: FormFile;
  destroyed$ = new Subject<boolean>();
  @ViewChild(FormGroupDirective) ngForm: FormGroupDirective;

  constructor(private dialog: MatDialog,
              private formBuilder: FormBuilder,
              private formGroupConverter: FormGroupConverter,
              private formFiles: FormFiles,
              private store: Store<AppState>,
              private actions: Actions,
              private snackBar: SnackBar) {
  }

  ngOnInit() {
    this.createForm();
    this.avatarFile = new FormFile();
    this.avatarFile.srcNotHave = environment.source.images.notHaveAvatar;
    this.genders$ = this.store.pipe(select(selectGenderList));
    this.store.dispatch(new LoadGenders());

    this.actions.pipe(
      ofType(PatientServiceActionTypes.AddPatientSuccess),
      takeUntil(this.destroyed$)
    ).subscribe(() => {
      this.resetForm();
      this.snackBar.info(environment.info.i2);
    });
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

  onSubmit() {
    if (this.form.valid) {
      const fd = this.formGroupConverter.load(this.form).toFormData();
      this.store.dispatch(new AddPatient(fd));
    }
  }

  resetForm() {
    this.avatarFile.reset();
    this.form.reset();
    this.ngForm.resetForm();
  }

  previewAvatar(file) {
    this.formFiles.loadSource(this.avatarFile, file);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
