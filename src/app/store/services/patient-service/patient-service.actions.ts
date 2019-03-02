import {Action} from '@ngrx/store';
import {PatientModel} from '../../../_models/api/patient.model';

export enum PatientServiceActionTypes {
  LoadPatients = '[PatientService] Load Patients',
  LoadPatientsSuccess = '[PatientService] Load Patients Success',

  AddPatient = '[PatientService] Add Patient',
  AddPatientSuccess = '[PatientService] Add Patient Success',

  AddSelectedPatient = '[PatientService] Add Selected Patient',
  AddSelectedPatientSuccess = '[PatientService] Add Selected Patient Success ',

  ResetSelectedPatient = '[PatientService] Reset Selected Patient',
  ResetSelectedPatientSuccess = '[PatientService] Reset Selected Patient Success '
}

// LoadPatients
export class LoadPatients implements Action {
  readonly type = PatientServiceActionTypes.LoadPatients;
}

export class LoadPatientsSuccess implements Action {
  readonly type = PatientServiceActionTypes.LoadPatientsSuccess;

  constructor(public payload: PatientModel[]) {
  }
}

// AddPatient
export class AddPatient implements Action {
  readonly type = PatientServiceActionTypes.AddPatient;

  constructor(public payload: PatientModel | FormData) {
  }
}

export class AddPatientSuccess implements Action {
  readonly type = PatientServiceActionTypes.AddPatientSuccess;

  constructor(public payload: PatientModel) {
  }
}

// AddSelectedPatient
export class AddSelectedPatient implements Action {
  readonly type = PatientServiceActionTypes.AddSelectedPatient;

  constructor(public payload: PatientModel) {
  }
}

export class AddSelectedPatientSuccess implements Action {
  readonly type = PatientServiceActionTypes.AddSelectedPatientSuccess;

  constructor(public payload: PatientModel) {
  }
}

// ResetSelectedPatient
export class ResetSelectedPatient implements Action {
  readonly type = PatientServiceActionTypes.ResetSelectedPatient;

  constructor() {
  }
}

export class ResetSelectedPatientSuccess implements Action {
  readonly type = PatientServiceActionTypes.ResetSelectedPatientSuccess;

  constructor() {
  }
}

export type PatientServiceActions =
  | AddPatient
  | AddPatientSuccess
  | LoadPatients
  | LoadPatientsSuccess
  | AddSelectedPatient
  | AddSelectedPatientSuccess
  | ResetSelectedPatient
  | ResetSelectedPatientSuccess;
