import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactInformationComponent } from './contact-information.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ContactInformationContentStubComponent } from '~app/contact-information-content/contact-information-content.stub.component';
import { FooterStubComponent } from '~app/footer/footer.stub.component';

@Component({ selector: 'tripsultant-apps-map-footer', template: '' })
class AppFooterStubComponent {
}

describe('ContactInformationComponent', () => {
  let component: ContactInformationComponent;
  let fixture: ComponentFixture<ContactInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactInformationComponent,
        ContactInformationContentStubComponent,
        FooterStubComponent
      ],
      imports: [
        NgMaterialModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a container for content card', () => {
    expect(fixture.debugElement
      .query(By.css('#contact-information-container'))).toBeTruthy();
  });

  it('should have a card containing contact information', () => {
    expect(fixture.debugElement
      .query(By.css('#contact-information-card'))).toBeTruthy();
  });

  it('should have a container for logo image', () => {
    expect(fixture.debugElement
      .query(By.css('#contact-information-logo-container'))).toBeTruthy();
  });

  it('should have mat card content element', () => {
    expect(fixture.debugElement
      .query(By.css('#contact-information-card-content'))).toBeTruthy();
  });

  it('should have a container for app footer', () => {
    expect(fixture.debugElement
      .query(By.css('#contact-information-footer-container'))).toBeTruthy();
  });

  it('should contain app footer', () => {
    expect(fixture.debugElement
      .query(By.css('#contact-information-footer'))).toBeTruthy();
  });

});
