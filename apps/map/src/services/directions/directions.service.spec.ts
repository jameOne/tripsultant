import { TestBed } from '@angular/core/testing';

import { DirectionsService } from './directions.service';

describe('RouteDistanceService', () => {
  let service: DirectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(
    'should have a working directions to matrix element conversion method',
    () => {
      expect(service.getMatrixEntries(
        ['0', '1', '2', '3'],
        ['0', '1', '2', '3'],
        ['2', '3', '0', '1']
      )).toEqual([{ row: 2, column: 3 }, { row: 3, column: 0 }, { row: 0, column: 1 }]);
      expect(service.getMatrixEntries(
        ['0', '1', '2', '3'],
        ['0', '1', '2', '3'],
        ['2', '0', '3', '1']
      )).toEqual([{ row: 2, column: 0 }, { row: 0, column: 3 }, { row: 3, column: 1 }]);
      expect(service.getMatrixEntries(
        ['0', '1', '2', '3'],
        ['0', '1', '2', '3'],
        ['2', '3', '1']
      )).toEqual([{ row: 2, column: 3 }, { row: 3, column: 1 }]);
    }
  );
});
