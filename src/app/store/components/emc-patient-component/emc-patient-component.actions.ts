import {Action} from '@ngrx/store';
import {PatientModel} from '../../../_models/api/patient.model';

export enum EmcPatientComponentActionTypes {
  LoadPatient = '[EmcPatientComponent] Load Patient',
  EditPatient = '[EmcPatientComponent] Edit Patient'
}

export class LoadPatient implements Action {
  readonly type = EmcPatientComponentActionTypes.LoadPatient;

  constructor(public payload: string) {
  }
}

export class EditPatient implements Action {
  readonly type = EmcPatientComponentActionTypes.EditPatient;

  constructor(public payload: PatientModel) {
  }
}


export type EmcPatientComponentActions =
  | EditPatient;
