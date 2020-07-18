import { TestBed } from '@angular/core/testing';

import { GoogleMapsDirectionsService } from './google-maps-directions.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GoogleMapsDirectionsService', () => {
  let service: GoogleMapsDirectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GoogleMapsDirectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
