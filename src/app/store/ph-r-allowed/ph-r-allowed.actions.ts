import { Action } from '@ngrx/store';

export enum PhRAllowedActionTypes {
  LoadPhRAlloweds = '[PhRAllowed] Load PhRAlloweds',
  
  
}

export class LoadPhRAlloweds implements Action {
  readonly type = PhRAllowedActionTypes.LoadPhRAlloweds;
}


export type PhRAllowedActions = LoadPhRAlloweds;
