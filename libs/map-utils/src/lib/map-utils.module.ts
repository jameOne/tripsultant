import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolylineDecodingService } from './services/polyline-decoding.service';

@NgModule({
  imports: [CommonModule],
  providers: [PolylineDecodingService]
})
export class MapUtilsModule {}
