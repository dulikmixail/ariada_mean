import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material';
import {select, Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import {Actions, ofType} from '@ngrx/effects';
import {takeUntil} from 'rxjs/operators';

import {BranchModel, EmployeeModel, PostModel} from '../../../../_models';
import {FormFile, FormFiles, FormGroupConverter, FormHelper, SnackBar} from '../../../../_helpers';
import {EmployeeFormModalComponent, ImageModalComponent} from '../../..';
import {AppState} from '../../../../store';
import {environment} from '../../../../../environments/environment';
import {selectBranchList} from '../../../../store/services/branch-service/branch-service.selector';
import {LoadBranches} from '../../../../store/services/branch-service/branch-service.actions';
import {selectPostList} from '../../../../store/services/post-service/post-service.selector';
import {LoadPosts} from '../../../../store/services/post-service/post-service.actions';
import {AddEmployee, EmployeeServiceActionTypes} from '../../../../store/services/employee-service/employee-service.actions';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  branches$: Observable<BranchModel[]>;
  posts$: Observable<PostModel[]>;
  photoFile: FormFile;
  educationFile: FormFile;
  placeRefresherCoursesFile: FormFile;
  destroyed$ = new Subject<boolean>();
  @ViewChild(FormGroupDirective) ngForm: FormGroupDirective;
  @Input() editEmployee: EmployeeModel;
  @Input() dialogRef: MatDialogRef<EmployeeFormModalComponent>;

  constructor(private dialog: MatDialog,
              private snackBar: SnackBar,
              private formBuilder: FormBuilder,
              private formGroupConverter: FormGroupConverter,
              private formFiles: FormFiles,
              private store: Store<AppState>,
              private formService: FormHelper,
              private actions: Actions) {
  }

  ngOnInit() {
    this.photoFile = new FormFile();
    this.photoFile.srcNotHave = environment.source.images.notHaveAvatar;
    this.educationFile = new FormFile();
    this.educationFile.srcNotHave = environment.source.images.notHaveAvatar;
    this.placeRefresherCoursesFile = new FormFile();
    this.placeRefresherCoursesFile.srcNotHave = environment.source.images.notHaveAvatar;

    this.branches$ = this.store.pipe(select(selectBranchList));
    this.store.dispatch(new LoadBranches());
    this.posts$ = this.store.pipe(select(selectPostList));
    this.store.dispatch(new LoadPosts());

    this.actions.pipe(
      ofType(EmployeeServiceActionTypes.AddEmployeeSuccess),
      takeUntil(this.destroyed$)
    ).subscribe(() => {
      this.resetForm();
      this.snackBar.info(environment.info.i2);
    });
    this.createForm();
  }

  createForm() {
    const e = !this.editEmployee ? new EmployeeModel() : this.editEmployee;
    if (e.photo) {
      this.photoFile.src = `${environment.srcImages}/${e.photo}`;
    }
    this.form = this.formBuilder.group({
      photo: [''],
      surname: [e.surname, Validators.required],
      name: [e.name, Validators.required],
      middleName: [e.middleName, Validators.required],
      itemNo: [e.itemNo, Validators.required],
      employmentDate: [e.employmentDate, Validators.required],
      expirationDate: [e.expirationDate],
      birthDate: [e.birthDate],
      residencePlace: [e.residencePlace],
      educationFile: [e.educationFile],
      refresherCoursesDate: [e.refresherCoursesDate],
      placeRefresherCoursesFile: [e.placeRefresherCoursesFile],
      branch: [e.branch, Validators.required],
      post: [e.post, Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const fd = this.formGroupConverter.load(this.form).toFormData();
      this.store.dispatch(new AddEmployee(fd));
    }
  }

  resetFormFiles() {
    this.photoFile.reset();
    this.educationFile.reset();
    this.placeRefresherCoursesFile.reset();
  }

  resetForm() {
    this.resetFormFiles();
    this.form.reset();
    this.ngForm.resetForm();
  }

  onFileChange(event, controlName: string, formFile: FormFile, loadSource: boolean) {
    this.formFiles.loadImage(
      {
        images: event.target.files,
        form: this.form,
        formFile: formFile
      },
      controlName
    ).catch(() => {
      formFile.reset();
    }).then((file: File) => {
      if (loadSource) {
        this.loadSourceFormFile(file, formFile);
      }
    });
  }

  openDialog() {
    this.dialog.open(ImageModalComponent, {
      data: {srcImage: this.photoFile.src}
    });
  }

  loadSourceFormFile(file: File, formFile: FormFile) {
    this.formFiles.loadSource(formFile, file);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
