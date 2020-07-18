import { TestBed } from '@angular/core/testing';

import { EndpointDirectoryService } from './endpoint-directory.service';

describe('EndpointDirectoryService', () => {
  let service: EndpointDirectoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndpointDirectoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
