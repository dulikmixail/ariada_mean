import {StaticFields} from '../../static-fields';
import {BranchModel} from '../b/branch.model';
import {PostModel} from '../p/post.model';
import {ReviewsModel} from '../r/reviews.model';

export class EmployeeModel extends StaticFields {
  itemNo: number;
  employmentDate: Date;
  expirationDate: Date;
  surname: string;
  name: string;
  middleName: string;
  birthDate: Date;
  residencePlace: string;
  educationFile: string;
  refresherCoursesDate: Date;
  placeRefresherCoursesFile: string;
  branch: BranchModel;
  reviews: ReviewsModel[];
  post: PostModel;
  photo: any;
}
