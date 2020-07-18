import { Endpoint } from './endpoint';
import { HttpHeaders } from '@angular/common/http';

describe('Endpoint', () => {
  it('should create an instance', () => {
    expect(new Endpoint('url', { headers: new HttpHeaders() })).toBeTruthy();
  });
});
