import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformationContentComponent } from './contact-information-content.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ContactInformationContentComponent', () => {
  let component: ContactInformationContentComponent;
  let fixture: ComponentFixture<ContactInformationContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactInformationContentComponent],
      imports: [NgMaterialModule, BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInformationContentComponent);
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
