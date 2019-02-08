import { Action } from '@ngrx/store';

export enum EmcPatientActionTypes {
  LoadEmcPatients = '[EmcPatient] Load EmcPatients',
  
  
}

export class LoadEmcPatients implements Action {
  readonly type = EmcPatientActionTypes.LoadEmcPatients;
}


export type EmcPatientActions = LoadEmcPatients;
