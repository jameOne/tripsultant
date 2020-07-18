import { TestBed } from '@angular/core/testing';

import { GooglePlacesPredictionsService } from './google-places-predictions.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GooglePlacesPredictionsService', () => {
  let service: GooglePlacesPredictionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GooglePlacesPredictionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
