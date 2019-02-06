import {Action} from '@ngrx/store';
import {PatientModel} from '../../_models/api/patient.model';

export enum PatientActionTypes {
  GetAllPatients = '[Patient] Get All Patients',
  GetAllPatientsSuccess = '[Patient] Get All Patients Success',
  AddPatient = '[Patient] Add Patient',
  AddPatientSuccess = '[Patient] Add Patient Success',
}

export class GetAllPatients implements Action {
  readonly type = PatientActionTypes.GetAllPatients;
}

export class GetAllPatientsSuccess implements Action {
  readonly type = PatientActionTypes.GetAllPatientsSuccess;

  constructor(public payload: PatientModel[]) {
  }
}

export class AddPatient implements Action {
  readonly type: PatientActionTypes.AddPatient;

  constructor(public payload: PatientModel) {
  }
}

export class AddPatientSuccess implements Action {
  readonly type: PatientActionTypes.AddPatientSuccess;

  constructor(public payload: PatientModel) {
  }
}

export type PatientActions =
  | GetAllPatients
  | GetAllPatientsSuccess
  | AddPatient
  | AddPatientSuccess;
