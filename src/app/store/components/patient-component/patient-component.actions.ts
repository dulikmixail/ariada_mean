import {Action} from '@ngrx/store';
import {PatientModel} from '../../../_models/api/patient.model';

export enum PatientComponentActionTypes {
  LoadPatient = '[PatientComponent] Load Patient',
  LoadPatientSuccess = '[PatientComponent] Load Patient Success'
}

// LoadPatient
export class LoadPatient implements Action {
  readonly type = PatientComponentActionTypes.LoadPatient;

  constructor(public payload: string) {
  }
}

export class LoadPatientSuccess implements Action {
  readonly type = PatientComponentActionTypes.LoadPatientSuccess;

  constructor(public payload: PatientModel) {
  }
}


export type PatientComponentActions =
  | LoadPatient
  | LoadPatientSuccess;
