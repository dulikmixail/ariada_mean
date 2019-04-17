import {StaticFields} from '../static-fields';
import {DepartmentModel} from './department.model';
import {ChamberModel} from './chamber.model';
import {BedModel} from './bed.model';

export class PlacementModel extends StaticFields {
  date: Date;
  department: DepartmentModel;
  chamber: ChamberModel;
  bed: BedModel;
}
