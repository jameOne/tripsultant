import { TestBed } from '@angular/core/testing';

import { PolylineDecodingService } from './polyline-decoding.service';

describe('PolylineDecodingService', () => {
  let service: PolylineDecodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolylineDecodingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should decode a polyline', () => {
    const geocode = service.decode('}|j~FjcgvO}~A}mJ');
    expect(geocode).toEqual([[41.84031, -87.69606], [41.85566, -87.63735]]);
  });
});
