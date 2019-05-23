import {TestBed} from '@angular/core/testing';

import {HowIncomingService} from './how-incoming.service';

describe('HowIncomingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HowIncomingService = TestBed.get(HowIncomingService);
    expect(service).toBeTruthy();
  });
});
