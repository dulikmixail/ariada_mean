import {Action} from '@ngrx/store';
import {PatientModel} from '../../_models/api/patient.model';

export enum PatientActionTypes {
  LoadPatients = '[Patient] Get All Patients',
  LoadPatientsSuccess = '[Patient] Get All Patients Success',
  AddPatient = '[Patient] Add Patient',
  AddPatientSuccess = '[Patient] Add Patient Success',
  AddSelectedPatient = '[Patient] Add Selected Patient',
  AddSelectedPatientSuccess = '[Patient] Add Selected Patient Success '
}

// LoadPatients
export class LoadPatients implements Action {
  readonly type = PatientActionTypes.LoadPatients;
}

export class LoadPatientsSuccess implements Action {
  readonly type = PatientActionTypes.LoadPatientsSuccess;

  constructor(public payload: PatientModel[]) {
  }
}

// AddPatient
export class AddPatient implements Action {
  readonly type = PatientActionTypes.AddPatient;

  constructor(public payload: PatientModel | FormData) {
  }
}

export class AddPatientSuccess implements Action {
  readonly type = PatientActionTypes.AddPatientSuccess;

  constructor(public payload: PatientModel) {
  }
}

// AddSelectedPatient
export class AddSelectedPatient implements Action {
  readonly type = PatientActionTypes.AddSelectedPatient;

  constructor(public payload: PatientModel) {
  }
}

export class AddSelectedPatientSuccess implements Action {
  readonly type = PatientActionTypes.AddSelectedPatientSuccess;

  constructor(public payload: PatientModel) {
  }
}

export type PatientActions =
  | AddPatient
  | AddPatientSuccess
  | LoadPatients
  | LoadPatientsSuccess
  | AddSelectedPatient
  | AddSelectedPatientSuccess;
