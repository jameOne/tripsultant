import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddTripDialogComponent } from './add-trip-dialog.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTripFormStubComponent } from '~app/add-trip-form/add-trip-form.stub.component';

describe('AddTripDialogComponent', () => {
  let component: AddTripDialogComponent;
  let fixture: ComponentFixture<AddTripDialogComponent>;
  let mockStore: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgMaterialModule,
        BrowserAnimationsModule
      ],
      providers: [
        provideMockStore(),
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ],
      declarations: [
        AddTripDialogComponent,
        AddTripFormStubComponent
      ]
    })
      .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTripDialogComponent);
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
