import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthenticationFormService } from './authentication-form.service';

describe('AuthenticationFormService', () => {
  let service: AuthenticationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthenticationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
