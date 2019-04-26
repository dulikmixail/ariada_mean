import {Action} from '@ngrx/store';
import {PatientModel} from '../../../_models/api/patient.model';
import {PaginationModel} from '../../../_models/api/pagination.model';
import {PageModel} from '../../../_models/api/page.model';
import {EmployeeModel} from '../../../_models/api/employee.model';

export enum PatientServiceActionTypes {
  SearchPatients = '[PatientService] Search Patients',
  SearchPatientsSimply = '[PatientService] Search Patients Simply',
  SearchPatientsSuccess = '[PatientService] Search Patients Success',

  LoadPatientPage = '[PatientService] Load Patient Page',
  LoadPatientPageSuccess = '[PatientService] Load Patient Page Success',

  AddPatient = '[PatientService] Add Patient',
  AddPatientSuccess = '[PatientService] Add Patient Success',

  DeletePatient = '[PatientService] Delete Patient',
  DeletePatientSuccess = '[PatientService] Delete Patient Success',

  UpdatePatient = '[PatientService] Update Patient',
  UpdatePatientSuccess = '[PatientService] Update Patient Success',
}

// SearchPatients
export class SearchPatients implements Action {
  readonly type = PatientServiceActionTypes.SearchPatients;

  constructor(public payload: PaginationModel<EmployeeModel>) {
  }
}

export class SearchPatientsSimply implements Action {
  readonly type = PatientServiceActionTypes.SearchPatientsSimply;

  constructor(public payload: string) {
  }
}

export class SearchPatientsSuccess implements Action {
  readonly type = PatientServiceActionTypes.SearchPatientsSuccess;

  constructor(public payload: PageModel<PatientModel>) {
  }
}

// LoadPatientPage
export class LoadPatientPage implements Action {
  readonly type = PatientServiceActionTypes.LoadPatientPage;

  constructor(public payload: PaginationModel<any>) {
  }
}

export class LoadPatientPageSuccess implements Action {
  readonly type = PatientServiceActionTypes.LoadPatientPageSuccess;

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
  | DeletePatient
  | DeletePatientSuccess
  | UpdatePatient
  | UpdatePatientSuccess
  | SearchPatients
  | SearchPatientsSimply
  | SearchPatientsSuccess
  | LoadPatientPage
  | LoadPatientPageSuccess;
