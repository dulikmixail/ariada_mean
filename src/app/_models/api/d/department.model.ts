import {ChamberModel} from '../c/chamber.model';
import {TitleModel} from '../t/title.model';

export class DepartmentModel extends TitleModel {
  chambers: ChamberModel[];
}
