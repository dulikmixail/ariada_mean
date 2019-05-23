import {TestBed} from '@angular/core/testing';

import {PsychologicalStatusService} from './psychological-status.service';

describe('PsychologicalStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PsychologicalStatusService = TestBed.get(PsychologicalStatusService);
    expect(service).toBeTruthy();
  });
});
