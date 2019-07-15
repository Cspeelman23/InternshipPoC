import { TestBed } from '@angular/core/testing';

import { FFSServiceService } from './ffsservice.service';

describe('FFSServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FFSServiceService = TestBed.get(FFSServiceService);
    expect(service).toBeTruthy();
  });
});
