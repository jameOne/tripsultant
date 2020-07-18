import { TestBed } from '@angular/core/testing';

import { GoogleMapsGeocodingService } from './google-maps-geocoding.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GooglePlacesGeocodingService', () => {
  let service: GoogleMapsGeocodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GoogleMapsGeocodingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
