import {Injectable} from '@angular/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {FormGroupConverter} from './form-group-converter';
import {Store} from '@ngrx/store';
import {AppState} from '../store';
import {MatSnackBar} from '@angular/material';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Form {

  constructor(private formGroupConverter: FormGroupConverter,
              private store: Store<AppState>,
              private snackBar: MatSnackBar) {

  }

  submit(formDirective: FormGroupDirective, form: FormGroup, storeActionClass): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (form.invalid) {
        this.snackBar.open(environment.info['2'], environment.info['1']);
        reject(false);
      } else {
        const fd = this.formGroupConverter.load(form).toFormData();
        this.store.dispatch(new storeActionClass(fd));
        formDirective.resetForm();
        form.reset();
        this.snackBar.open(environment.errors['5'], environment.errors['1']);
        resolve(true);
      }
    });
  }
}
