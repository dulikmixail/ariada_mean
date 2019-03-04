import {Action} from '@ngrx/store';
import {PatientModel} from '../../../_models/api/patient.model';

export enum PatientServiceActionTypes {
  LoadPatients = '[PatientService] Load Patients',
  LoadPatientsSuccess = '[PatientService] Load Patients Success',

  AddPatient = '[PatientService] Add Patient',
  AddPatientSuccess = '[PatientService] Add Patient Success',

  DeletePatient = '[PatientService] Delete Patient',
  DeletePatientSuccess = '[PatientService] Delete Patient Success',
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

// DeletePatient
export class DeletePatient implements Action {
  readonly type = PatientServiceActionTypes.DeletePatient;

  constructor(public payload: PatientModel) {
  }
}

export class DeletePatientSuccess implements Action {
  readonly type = PatientServiceActionTypes.DeletePatientSuccess;

  constructor(public payload: PatientModel) {
  }
}

export type PatientServiceActions =
  | AddPatient
  | AddPatientSuccess
  | LoadPatients
  | LoadPatientsSuccess
  | DeletePatient
  | DeletePatientSuccess;
