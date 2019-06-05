import {Action} from '@ngrx/store';
import {BedModel, ChamberModel, DepartmentModel} from '../../../_models';

export enum PlacementFormComponentActionTypes {
  LoadPlacementFormComponent = '[PlacementFormComponent] Load PlacementFormComponent',

  LoadDepartments = '[PlacementFormComponent] Load Departments',
  LoadChambers = '[PlacementFormComponent] Load Chambers',
  LoadBeds = '[PlacementFormComponent] Load Beds',

  SelectDepartment = '[PlacementFormComponent] Select Department',
  SelectChamber = '[PlacementFormComponent] Select Chamber',
  SelectBed = '[PlacementFormComponent] Select Department',

  LoadDepartmentsSuccess = '[PlacementFormComponent] Load Departments Success',
  LoadChambersSuccess = '[PlacementFormComponent] Load Chambers Success',
  LoadBedsSuccess = '[PlacementFormComponent] Load Beds Success',
}

export class LoadPlacementFormComponent implements Action {
  readonly type = PlacementFormComponentActionTypes.LoadPlacementFormComponent;
}

export class LoadDepartments implements Action {
  readonly type = PlacementFormComponentActionTypes.LoadDepartments;
}

export class LoadChambers implements Action {
  readonly type = PlacementFormComponentActionTypes.LoadChambers;

  constructor(public payload: string) {
  }
}

export class LoadBeds implements Action {
  readonly type = PlacementFormComponentActionTypes.LoadBeds;

  constructor(public payload: string) {
  }
}

export class SelectDepartment implements Action {
  readonly type = PlacementFormComponentActionTypes.SelectDepartment;

  constructor(public payload: DepartmentModel) {
  }
}

export class SelectChamber implements Action {
  readonly type = PlacementFormComponentActionTypes.SelectChamber;

  constructor(public payload: ChamberModel) {
  }
}

export class SelectBed implements Action {
  readonly type = PlacementFormComponentActionTypes.SelectBed;

  constructor(public payload: BedModel) {
  }
}

export class LoadDepartmentsSuccess implements Action {
  readonly type = PlacementFormComponentActionTypes.LoadDepartmentsSuccess;

  constructor(public payload: DepartmentModel[]) {
  }
}

export class LoadChambersSuccess implements Action {
  readonly type = PlacementFormComponentActionTypes.LoadChambersSuccess;

  constructor(public payload: ChamberModel[]) {
  }
}

export class LoadBedsSuccess implements Action {
  readonly type = PlacementFormComponentActionTypes.LoadBedsSuccess;

  constructor(public payload: BedModel[]) {
  }
}


export type PlacementFormComponentActions =
  | LoadPlacementFormComponent
  | SelectDepartment
  | SelectChamber
  | SelectBed
  | LoadDepartments
  | LoadChambers
  | LoadBeds
  | LoadDepartmentsSuccess
  | LoadChambersSuccess
  | LoadBedsSuccess;

