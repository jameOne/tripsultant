import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { AddTripFormComponent } from './add-trip-form.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { singleMapTestState } from '~store/testing/states/single-map.state';

describe('AddTripFormComponent', () => {
  let component: AddTripFormComponent;
  let fixture: ComponentFixture<AddTripFormComponent>;
  let mockStore: MockStore;
  const initialState = singleMapTestState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
      declarations: [AddTripFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgMaterialModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTripFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept a string name as input value ', async(() => {
    expect(component.submitted).toEqual(false);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      jest.spyOn(component.tripName, 'emit');
      const input = fixture.debugElement.query(By.css('#trip-name-input'));
      const element = input.nativeElement;
      expect(element.value).toEqual('');
      element.value = 'Test';
      element.dispatchEvent(new Event('input'));
      expect(fixture.componentInstance.tripNameFormGroup.controls.name.value).toEqual('Test');
      component.onSubmit();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.submitted).toEqual(true);
        expect(component.tripNameFormGroup.invalid).toEqual(false);
        expect(component.tripName.emit).toHaveBeenCalledWith('Test');
      });
    });
  }));

  it('should only accept trip names with 4 or more characters', () => {
    expect(component.submitted).toEqual(false);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      jest.spyOn(component.tripName, 'emit');
      const input = fixture.debugElement
        .query(By.css('#trip-name-input'));
      const element = input.nativeElement;
      expect(element.value).toEqual('');
      element.value = 'Tes';
      element.dispatchEvent(new Event('input'));
      expect(fixture.componentInstance.tripNameFormGroup.controls.name.value)
        .toEqual('');
      component.onSubmit();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.submitted).toEqual(true);
        expect(component.tripNameFormGroup.invalid).toEqual(true);
        expect(component.tripName.emit).toHaveBeenCalledTimes(0);
      });
    });
  });

  it(
    'should only accept unique (This depends on App store/states) trip names',
    () => {
      expect(component.submitted).toEqual(false);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        jest.spyOn(component.tripName, 'emit');
        const input = fixture.debugElement
          .query(By.css('#trip-name-input'));
        const element = input.nativeElement;
        expect(element.value).toEqual('');
        element.value = 'Trip';
        element.dispatchEvent(new Event('input'));
        expect(fixture.componentInstance.tripNameFormGroup.controls.name.value)
          .toEqual('');
        component.onSubmit();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.submitted).toEqual(true);
          expect(component.tripNameFormGroup.invalid).toEqual(true);
          expect(component.tripName.emit).toHaveBeenCalledTimes(0);
        });
      });
    }
  );

});
