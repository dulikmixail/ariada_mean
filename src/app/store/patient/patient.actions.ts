import {Action} from '@ngrx/store';
import {PatientModel} from '../../_models/api/patient.model';

export enum PatientActionTypes {
  LoadPatients = '[Patient] Load Patients',
  AddPatient = '[Patient] Add Patient',
}

export class LoadPatients implements Action {
  readonly type = PatientActionTypes.LoadPatients;
}

export class AddPatient implements Action {
  readonly type: PatientActionTypes.AddPatient;

  constructor(public payload: PatientModel) {
  }
}


export type PatientActions =
  | LoadPatients
  | AddPatient;
