import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('cars')



export class CarsController {
    @Get()
    getAllCars(){
        return "Return all cars"
    }

    @Get(':id')
    getById(@Param('id')id: string){
        return 'Return a car with id'+id;
    }

    @Put(':id')
    update(@Param('id')id: string){
        return 'Update a car with id'+id;
    }

    @Delete(':id')
    delete(@Param('id')id: string){
        return 'Delete a car with id' + id;
    }

    @Post('')
    create(){
        return 'Create a car with id';
    }

}
