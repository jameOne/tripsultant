import { Pagination } from './pagination';

describe('Pagination', () => {
  it('should create an instance', () => {
    expect(new Pagination(10, 'a', 'b')).toBeTruthy();
  });
});
