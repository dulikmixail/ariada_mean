import { TestBed } from '@angular/core/testing';

import { PhRAllowedService } from './ph-r-allowed.service';

describe('PhRAllowedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhRAllowedService = TestBed.get(PhRAllowedService);
    expect(service).toBeTruthy();
  });
});
