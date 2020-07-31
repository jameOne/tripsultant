import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasesComponent } from './atlases.component';

describe('AtlasesComponent', () => {
  let component: AtlasesComponent;
  let fixture: ComponentFixture<AtlasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
