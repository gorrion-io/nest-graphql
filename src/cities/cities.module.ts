import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CitySchema } from './city.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'City', schema: CitySchema }])
  ],
  providers: [CitiesService]
})
export class CitiesModule { }
