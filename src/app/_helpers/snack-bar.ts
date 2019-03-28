import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SnackBar {
  constructor(private snackBar: MatSnackBar) {
  }

  info(message: string) {
    this.snackBar.open(message, environment.info.i1, {panelClass: environment.info.panelClass});
  }

  error(message: string) {
    this.snackBar.open(message, environment.errors.e1, {panelClass: environment.errors.panelClass});
  }
}
