import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {SnackBar, CustomValidators} from '../../../../_helpers';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store';
import {Subject} from 'rxjs';
import {TitleModel} from '../../../../_models/api/title.model';
import {Actions, ofType} from '@ngrx/effects';
import {takeUntil} from 'rxjs/operators';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-base-title-form',
  templateUrl: './base-title-form.component.html',
  styleUrls: ['./base-title-form.component.css']
})
export class BaseTitleFormComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() placeholder: string;
  @Input() addModelSuccessActionType: string;
  @Input() addModelActionClass: any;
  form: FormGroup;
  destroyed$ = new Subject<boolean>();
  @ViewChild(FormGroupDirective) ngForm: FormGroupDirective;

  constructor(private formBuilder: FormBuilder,
              private store: Store<AppState>,
              private actions: Actions,
              private snackBar: SnackBar) {
  }

  ngOnInit() {
    this.createForm();
    if (!this.placeholder) {
      this.placeholder = 'Назва';
    }
    CustomValidators.inputFieldRequired(this.addModelSuccessActionType, 'addModelSuccessActionType');
    CustomValidators.inputFieldRequired(this.addModelActionClass, 'addModelActionClass');
    this.actions.pipe(
      ofType(this.addModelSuccessActionType),
      takeUntil(this.destroyed$)
    ).subscribe(() => {
      this.form.reset();
      this.ngForm.resetForm();
      this.snackBar.info(environment.info.i2);
    });
  }

  createForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const titleModel: TitleModel = this.form.value;
      this.store.dispatch(new this.addModelActionClass(titleModel));
    }
  }

  resetForm() {
    this.form.reset();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
