import {Injectable} from '@angular/core';
import {FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidators {

  static inputFieldRequired(field, name) {
    if (!field) {
      throw new Error(`Attribute ${name} is required`);
    }
  }

  static arrayRequired(c: FormControl) {
    if (c.value.length === 0) {
      return {required: true};
    } else {
      return null;
    }
  }
}
