import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationToggleComponent } from './side-navigation-toggle.component';
import { NgMaterialModule } from '~app/ng-material/ng-material.module';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { singleMapTestState } from '~store/testing/states/single-map.state';

describe('SideNavigationToggleComponent', () => {
  let component: SideNavigationToggleComponent;
  let fixture: ComponentFixture<SideNavigationToggleComponent>;
  let mockStore: MockStore;
  const initialState = singleMapTestState;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavigationToggleComponent],
      imports: [NgMaterialModule],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
