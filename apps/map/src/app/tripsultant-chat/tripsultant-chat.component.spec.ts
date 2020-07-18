import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsultantChatComponent } from './tripsultant-chat.component';
import { NgMaterialModule } from '~app/ng-material/ng-material.module';

describe('TripsultantChatComponent', () => {
  let component: TripsultantChatComponent;
  let fixture: ComponentFixture<TripsultantChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TripsultantChatComponent],
      imports: [NgMaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsultantChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
