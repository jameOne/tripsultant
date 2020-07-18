import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaQueryComponent } from './media-query.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { singleMapTestState } from '~store/testing/states/single-map.state';

describe('MediaQueryComponent', () => {
  let component: MediaQueryComponent;
  let fixture: ComponentFixture<MediaQueryComponent>;
  let mockStore: MockStore;
  const initialState = singleMapTestState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MediaQueryComponent],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
