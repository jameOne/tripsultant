import { NoSanitizePipe } from './no-sanitize.pipe';
import { async, TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

describe('NoSanitizePipe', () => {
  let domSanitizer: DomSanitizer;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserModule ]
    });
    domSanitizer = TestBed.inject(DomSanitizer);
  }));

  it('create an instance',() => {
    const pipe = new NoSanitizePipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});
