import { Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Body, UsePipes, ValidationPipe, Patch, Query, ParseUUIDPipe } from '@nestjs/common';
import { CreateDto } from './dto/create-car-dto'
import { UpdateDto } from './dto/update-car-dto';
import { searchDto } from './dto/search-car-dto';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    constructor(private readonly carService: CarsService){}


    @Get()
    getAllCars(@Query() params: searchDto){

        return this.carService.getAll();
    }

    
    @Get(':id')
    getById(@Param('id', ParseUUIDPipe)id: string){
        return this.carService.findById(id);
    }

    @Patch(':id')
    update(@Param('id', ParseUUIDPipe)id: string, @Body() car:UpdateDto){
        return this.carService.update(id, car);
    }

    @Delete(':id')
    delete(@Param('id', ParseUUIDPipe)id: string){
        return this.carService.delete(id);
    }


    @Post('')
    //@UsePipes(ValidationPipe)
    create(@Body() car:CreateDto){

        return this.carService.create(car);
    }

}
