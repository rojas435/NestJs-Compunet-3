import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  imports: [TypeOrmModule.forFeature([Car])

  ],

})
export class CarsModule {}
