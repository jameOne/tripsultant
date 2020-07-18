import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndConditionsContentComponent } from './terms-and-conditions-content.component';

describe('TermsAndConditionsContentComponent', () => {
  let component: TermsAndConditionsContentComponent;
  let fixture: ComponentFixture<TermsAndConditionsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TermsAndConditionsContentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsAndConditionsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
