import {PlacementFormComponentActions, PlacementFormComponentActionTypes} from './placement-form-component.actions';
import {BedModel, ChamberModel, DepartmentModel} from '../../../_models';

export interface State {
  departments: DepartmentModel[];
  chambersByDepartment: ChamberModel[];
  bedsByChamber: BedModel[];
  selectedDepartment: DepartmentModel;
  selectedChamber: ChamberModel;
  selectedBed: BedModel;
  loadDepartments: boolean;
  loadChambers: boolean;
  loadBeds: boolean;
}

export const initialState: State = {
  departments: [],
  chambersByDepartment: [],
  bedsByChamber: [],
  selectedDepartment: new DepartmentModel(),
  selectedChamber: new ChamberModel(),
  selectedBed: new BedModel(),
  loadDepartments: false,
  loadChambers: false,
  loadBeds: false,
};

export function reducer(state = initialState, action: PlacementFormComponentActions): State {
  switch (action.type) {

    case PlacementFormComponentActionTypes.LoadDepartments:
      return state;

    default:
      return state;
  }
}
