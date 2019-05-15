import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {GenderModel} from '../../../../_models/api/gender.model';
import {FormFile, FormFiles, SnackBar} from '../../../../_helpers';
import {MatChipInputEvent, MatChipList, MatDialog, MatDialogRef} from '@angular/material';
import {FormGroupConverter} from '../../../../_helpers';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../store';
import {environment} from '../../../../../environments/environment';
import {selectGenderList} from '../../../../store/services/gender-service/gender-service.selector';
import {ImageModalComponent} from '../../image-modal/image-modal/image-modal.component';
import {AddPatient, PatientServiceActionTypes} from '../../../../store/services/patient-service/patient-service.actions';
import {Actions, ofType} from '@ngrx/effects';
import {takeUntil} from 'rxjs/operators';
import {PatientModel} from '../../../../_models/api/patient.model';
import {PatientFormModalComponent} from '../../patient-form-modal/patient-form-modal/patient-form-modal.component';
import {ENTER, MAC_ENTER, SPACE} from '@angular/cdk/keycodes';

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
  @ViewChild('phoneNumberChipList') phoneNumberChipList: MatChipList;
  patient: PatientModel;
  @Input() editPatient: PatientModel;
  @Input() dialogRef: MatDialogRef<PatientFormModalComponent>;
  readonly separatorKeysCodes: number[] = [ENTER, MAC_ENTER, SPACE];

  constructor(private dialog: MatDialog,
              private formBuilder: FormBuilder,
              private formGroupConverter: FormGroupConverter,
              private formFiles: FormFiles,
              private store: Store<AppState>,
              private actions: Actions,
              private snackBar: SnackBar) {
  }

  ngOnInit() {
    this.avatarFile = new FormFile();
    this.avatarFile.srcNotHave = environment.source.images.notHaveAvatar;
    this.genders$ = this.store.pipe(select(selectGenderList));

    this.actions.pipe(
      ofType(PatientServiceActionTypes.AddPatientSuccess),
      takeUntil(this.destroyed$)
    ).subscribe(() => {
      this.resetForm();
      this.snackBar.info(environment.info.i2);
    });
    this.createForm();
  }

  createForm() {
    const p  = !this.editPatient ? new PatientModel() : this.editPatient;
    if (p.photo) {
      this.avatarFile.src = `${environment.srcImages}/${p.photo}`;
    }
    this.form = this.formBuilder.group({
      photo: [''],
      surname: [p.surname, Validators.required],
      name: [p.name, Validators.required],
      middleName: [p.middleName, Validators.required],
      birthDate: [p.birthDate],
      permanentResidence: p.permanentResidence,
      addressOfRelativesAndFamily: p.addressOfRelativesAndFamily,
      phoneNumbers: [p.phoneNumbers],
      medicalCardNumber: p.medicalCardNumber,
      workplace: p.workplace,
      workPost: p.workPost,
      gender: [p.gender, Validators.required]
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
    if (this.validatePhoneNumberChip() && this.form.valid) {
      const fd = this.formGroupConverter.load(this.form).toFormData();
      this.store.dispatch(new AddPatient(fd));
    }
  }

  resetForm() {
    this.phoneNumberChipList.errorState = false;
    this.avatarFile.reset();
    this.form.reset();
    this.ngForm.resetForm();
    this.createForm();
  }

  previewAvatar(file) {
    this.formFiles.loadSource(this.avatarFile, file);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  addPhoneNumberChip($event: MatChipInputEvent): void {
    const input = $event.input;
    const value = $event.value;
    const control = this.form.get('phoneNumbers');

    if ((value.trim() !== '')) {
      control.value.push(value.trim());
      input.value = '';
    }
    this.validatePhoneNumberChip();
  }

  removePhoneNumberChip(phoneNumberChip: string): void {
    const control = this.form.get('phoneNumbers');
    const index = control.value.indexOf(phoneNumberChip);
    if (index >= 0) {
      control.value.splice(index, 1);
    }
    this.validatePhoneNumberChip();
  }

  validatePhoneNumberChip() {
    const control = this.form.get('phoneNumbers');
    const isValidate = !!control.value.length && control.value.length > 0;
    this.phoneNumberChipList.errorState = !isValidate;
    return isValidate;
  }
}
