import {Action} from '@ngrx/store';
import {PaginationModel, PatientModel} from '../../../_models';

export enum EmcPatientComponentActionTypes {
  LoadPatient = '[EmcPatientComponent] Load Patient',
  EditPatient = '[EmcPatientComponent] Edit Patient',
  SearchPatient = '[EmcPatientComponent] Search Patient',
}

export class LoadPatient implements Action {
  readonly type = EmcPatientComponentActionTypes.LoadPatient;

  constructor(public payload: PatientModel) {
  }
}

export class EditPatient implements Action {
  readonly type = EmcPatientComponentActionTypes.EditPatient;

  constructor(public payload: PatientModel) {
  }
}

export class SearchPatient implements Action {
  readonly type = EmcPatientComponentActionTypes.SearchPatient;

  constructor(public payload: PaginationModel<PatientModel>) {
  }
}


export type EmcPatientComponentActions =
  | LoadPatient
  | EditPatient
  | SearchPatient;
