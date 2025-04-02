import { Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateDto } from './dto/create-car-dto'

@Controller('cars')
export class CarsController {
    @Get()
    getAllCars(){
        return "Return all cars"
    }

    @Get(':id')
    getById(@Param('id', ParseIntPipe)id: Number){
        return 'Return a car with id '+id;
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe)id: string){
        return 'Update a car with id'+id;
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe)id: string){
        return 'Delete a car with id' + id;
    }

    @Post('')
    //@UsePipes(ValidationPipe)
    create(@Body() body:CreateDto){

        return body;
    }

}
