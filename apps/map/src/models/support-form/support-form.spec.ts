import { SupportForm } from './support-form';

describe('SupportForm', () => {
  it('should create an instance', () => {
    expect(new SupportForm('email', 'content')).toBeTruthy();
  });
});
