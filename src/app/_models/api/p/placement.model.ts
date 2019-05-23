import {BedModel} from '../b/bed.model';
import {ChamberModel} from '../c/chamber.model';
import {DepartmentModel} from '../d/department.model';
import {StaticFields} from '../../static-fields';

export class PlacementModel extends StaticFields {
  date: Date;
  department: DepartmentModel;
  chamber: ChamberModel;
  bed: BedModel;
}
