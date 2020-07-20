import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FooterStubComponent } from '~app/footer/footer.stub.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { singleMapTestState } from '~store/testing/states/single-map.state';
import { Component, Directive, HostListener, Input } from '@angular/core';
import { TripsultantChatComponent } from '~app/tripsultant-chat/tripsultant-chat.component';

// @Component({ selector: 'tripsultant-apps-map-footer', template: '' })
// class AppFooterStubComponent {
// }
//
@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent {
}

@Directive({
  selector: '[routerLink]'
})
class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  @HostListener('click')
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockStore: MockStore;
  const initialState = singleMapTestState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FooterStubComponent,
        RouterOutletStubComponent
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch add trip action', () => {
    component.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      mockStore.scannedActions$.subscribe(action => {
        expect(action).toEqual('[Trip] Add (append) trip to trips array.')
      })
    });
  });

});
