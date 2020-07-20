import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DirectionsModule } from '../directions/directions.module';
import { GeocodingModule } from '../geocoding/geocoding.module';
import { PlacesModule } from '../places/places.module';

@Module({
  imports: [
    DirectionsModule,
    GeocodingModule,
    PlacesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
