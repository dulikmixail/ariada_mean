import {TitleModel} from './title.model';
import {ChamberModel} from './chamber.model';

export class DepartmentModel extends TitleModel {
  chambers: ChamberModel[];
}
