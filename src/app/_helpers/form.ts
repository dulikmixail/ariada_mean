import {Injectable} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {FormGroupConverter} from './form-group-converter';
import {Store} from '@ngrx/store';
import {AppState} from '../store';

@Injectable({
  providedIn: 'root'
})
export class Form {

  constructor(private formGroupConverter: FormGroupConverter,
              private store: Store<AppState>) {

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
