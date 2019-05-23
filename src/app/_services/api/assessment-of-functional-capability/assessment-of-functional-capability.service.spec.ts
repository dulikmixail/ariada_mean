import {TestBed} from '@angular/core/testing';

import {AssessmentOfFunctionalCapabilityService} from './assessment-of-functional-capability.service';

describe('AssessmentOfFunctionalCapabilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssessmentOfFunctionalCapabilityService = TestBed.get(AssessmentOfFunctionalCapabilityService);
    expect(service).toBeTruthy();
  });
});
