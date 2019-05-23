import {BedModel, ChamberModel, DepartmentModel, StaticFields} from '../..';

export class PlacementModel extends StaticFields {
  date: Date;
  department: DepartmentModel;
  chamber: ChamberModel;
  bed: BedModel;
}
