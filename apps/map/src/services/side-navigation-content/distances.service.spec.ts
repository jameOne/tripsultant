import { TestBed } from '@angular/core/testing';

import { DistancesService } from './distances.service';

describe('DistancesService', () => {
  let service: DistancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
