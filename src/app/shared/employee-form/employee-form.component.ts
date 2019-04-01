import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {select, Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';

import {AppState} from '../../store';
import {environment} from '../../../environments/environment';
import {FormFile, FormFiles, FormGroupConverter, SnackBar, FormHelper} from '../../_helpers';
import {BranchModel} from '../../_models/api/branch.model';
import {PostModel} from '../../_models/api/post.model';
import {selectPostList} from '../../store/services/post-service/post-service.selector';
import {LoadBranches} from '../../store/services/branch-service/branch-service.actions';
import {LoadPosts} from '../../store/services/post-service/post-service.actions';
import {AddEmployee, EmployeeServiceActionTypes} from '../../store/services/employee-service/employee-service.actions';
import {ImageModalComponent} from '../image-modal/image-modal.component';
import {selectBranchList} from '../../store/services/branch-service/branch-service.selector';
import {Actions, ofType} from '@ngrx/effects';
import {takeUntil} from 'rxjs/operators';

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
    this.createForm();
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

  }

  createForm() {
    this.form = this.formBuilder.group({
      photo: [''],
      surname: ['23', Validators.required],
      name: ['2312', Validators.required],
      middleName: ['23', Validators.required],
      itemNo: ['2', Validators.required],
      employmentDate: ['2012-04-23', Validators.required],
      expirationDate: [''],
      birthDate: ['2012-04-23'],
      residencePlace: ['21123123'],
      educationFile: [''],
      refresherCoursesDate: ['2012-04-23'],
      placeRefresherCoursesFile: [''],
      branch: ['', Validators.required],
      post: ['', Validators.required]
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
