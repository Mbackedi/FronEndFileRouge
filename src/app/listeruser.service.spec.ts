import { TestBed } from '@angular/core/testing';

import { ListeruserService } from './listeruser.service';

describe('ListeruserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListeruserService = TestBed.get(ListeruserService);
    expect(service).toBeTruthy();
  });
});
