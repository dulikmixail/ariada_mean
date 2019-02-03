import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CrudService} from '../../crud/crud.service';
import {AssessmentOfFunctionalCapability} from '../../../_models/api/assessment-of-functional-capability';

@Injectable({
  providedIn: 'root'
})
export class AssessmentOfFunctionalCapabilityService extends CrudService<AssessmentOfFunctionalCapability> {

  constructor(http: HttpClient) {
    super('assessment_of_functional_capabilities', http);
  }
}
