import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaypointDragAndDropComponent } from './waypoint-drag-and-drop.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('WaypointDragAndDropComponent', () => {
  let component: WaypointDragAndDropComponent;
  let fixture: ComponentFixture<WaypointDragAndDropComponent>;
  let mockStore: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WaypointDragAndDropComponent],
      providers: [
        provideMockStore()
      ],
      imports: [NgMaterialModule, BrowserAnimationsModule]
    })
      .compileComponents();
    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaypointDragAndDropComponent);
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
