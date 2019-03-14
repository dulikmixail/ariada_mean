import {Injectable} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {FormGroupConverter} from './form-group-converter';
import {Store} from '@ngrx/store';
import {AppState} from '../store';
import {environment} from '../../environments/environment';
import {SnackBar} from './snack-bar';

@Injectable({
  providedIn: 'root'
})
export class Form {

  constructor(private formGroupConverter: FormGroupConverter,
              private store: Store<AppState>,
              private snackBar: SnackBar) {

  }

  submitPromise(ngForm: NgForm, form: FormGroup, storeActionClass): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (form.invalid) {
        reject(true);
      } else {
        const fd = this.formGroupConverter.load(form).toFormData();
        this.store.dispatch(new storeActionClass(fd));
        ngForm.resetForm();
        form.reset();
        this.snackBar.info(environment.info['2']);
        resolve(false);
      }
    });
  }

  submit(ngForm: NgForm, form: FormGroup, storeActionClass) {
    this.submitPromise(ngForm, form, storeActionClass)
      .then(() => {
      })
      .catch(() => {
      });
  }
}
