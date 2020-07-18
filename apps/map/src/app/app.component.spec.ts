import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FooterStubComponent } from '~app/footer/footer.stub.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { singleMapTestState } from '~store/testing/states/single-map.state';
import { Component, Directive, HostListener, Input } from '@angular/core';

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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
