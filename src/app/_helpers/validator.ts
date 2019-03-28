import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Validator {

  checkRequiredFields(field, name) {
    if (!field) {
      throw new Error(`Attribute ${name} is required`);
    }
  }
}
