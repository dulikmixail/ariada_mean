import {TestBed} from '@angular/core/testing';

import {ApiResourcePreloaderService} from './api-resource-preloader.service';

describe('ApiResourcePreloaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiResourcePreloaderService = TestBed.get(ApiResourcePreloaderService);
    expect(service).toBeTruthy();
  });
});
