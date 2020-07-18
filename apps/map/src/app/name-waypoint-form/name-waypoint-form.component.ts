import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tripsultant-apps-map-name-waypoint-form',
  templateUrl: './name-waypoint-form.component.html',
  styleUrls: ['./name-waypoint-form.component.scss']
})
export class NameWaypointFormComponent implements OnInit {

  @Input() inputRequired: boolean;
  @Input() inputPlaceholder: string;
  @Output() waypointName: EventEmitter<string> = new EventEmitter();
  waypointNameFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.waypointNameFormGroup = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.waypointName.emit(this.waypointNameFormGroup.controls.name.value);
  }


}
