import {Action} from '@ngrx/store';
import {PatientModel} from '../../../_models/api/patient.model';

export enum PatientSearchPanelComponentActionTypes {
  // SelectPatient = '[PatientSearchPanelComponent] Select Patient',
  SelectPatientSuccess = '[PatientSearchPanelComponent] Select Patient Success'
}

// SelectPatient
export class SelectPatientSuccess implements Action {
  readonly type = PatientSearchPanelComponentActionTypes.SelectPatientSuccess;

  constructor(public payload: PatientModel) {
  }
}


export type PatientSearchPanelComponentActions =
  | SelectPatientSuccess;
