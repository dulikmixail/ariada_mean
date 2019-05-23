import {TestBed} from '@angular/core/testing';

import {SelfServiceService} from './self-service.service';

describe('SelfServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelfServiceService = TestBed.get(SelfServiceService);
    expect(service).toBeTruthy();
  });
});
