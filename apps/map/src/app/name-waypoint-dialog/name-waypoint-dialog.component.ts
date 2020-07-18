import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'tripsultant-apps-map-name-waypoint-dialog',
  templateUrl: './name-waypoint-dialog.component.html',
  styleUrls: ['./name-waypoint-dialog.component.scss']
})
export class NameWaypointDialogComponent implements OnInit {

  waypointData: { name: string };

  constructor(
    public dialogRef: MatDialogRef<NameWaypointDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.waypointData = data.waypointData;
  }

  ngOnInit(): void {
    this.waypointData = { name };
  }

  closeDialog(): void {
    this.dialogRef.close(this.waypointData);
  }

  nameWaypoint(name: string): void {
    this.waypointData.name = name;
    this.closeDialog();
  }
}
