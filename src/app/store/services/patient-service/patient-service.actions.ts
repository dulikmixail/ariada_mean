import {Action} from '@ngrx/store';
import {PatientModel} from '../../../_models/api/patient.model';
import {PaginationModel} from '../../../_models/api/pagination.model';
import {PageModel} from '../../../_models/api/page.model';
import {EmployeeModel} from '../../../_models/api/employee.model';

export enum PatientServiceActionTypes {
  LoadPatients = '[PatientService] Load Patients',
  LoadPatientsSuccess = '[PatientService] Load Patients Success',

  SearchPatients = '[PatientService] Search Patients',
  SearchPatientsSuccess = '[PatientService] Search Patients Success',

  AddPatient = '[PatientService] Add Patient',
  AddPatientSuccess = '[PatientService] Add Patient Success',

  DeletePatient = '[PatientService] Delete Patient',
  DeletePatientSuccess = '[PatientService] Delete Patient Success',

  UpdatePatient = '[PatientService] Update Patient',
  UpdatePatientSuccess = '[PatientService] Update Patient Success',
}

// LoadPatients
export class LoadPatients implements Action {
  readonly type = PatientServiceActionTypes.LoadPatients;

  constructor(public payload: PaginationModel<PatientModel>) {
  }
}

export class LoadPatientsSuccess implements Action {
  readonly type = PatientServiceActionTypes.LoadPatientsSuccess;

  constructor(public payload: PageModel<PatientModel>) {
  }
}

// SearchPatients
export class SearchPatients implements Action {
  readonly type = PatientServiceActionTypes.SearchPatients;

  constructor(public payload: PaginationModel<EmployeeModel>) {
  }
}

export class SearchPatientsSuccess implements Action {
  readonly type = PatientServiceActionTypes.SearchPatientsSuccess;

  constructor(public payload: PageModel<PatientModel>) {
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

// UpdatePatient
export class UpdatePatient implements Action {
  readonly type = PatientServiceActionTypes.UpdatePatient;

  constructor(public payload: PatientModel) {
  }
}

export class UpdatePatientSuccess implements Action {
  readonly type = PatientServiceActionTypes.UpdatePatientSuccess;

  constructor(public payload: PatientModel) {
  }
}

export type PatientServiceActions =
  | AddPatient
  | AddPatientSuccess
  | LoadPatients
  | LoadPatientsSuccess
  | DeletePatient
  | DeletePatientSuccess
  | UpdatePatient
  | UpdatePatientSuccess
  | SearchPatients
  | SearchPatientsSuccess;
