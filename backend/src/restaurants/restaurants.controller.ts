import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpException,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from '../dto';
import { ValidateObjectIdPipe } from '../common/pipes/validate-objectid.pipe';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantsService.create(createRestaurantDto);
  }

  @Get()
  findAll() {
    return this.restaurantsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id', ValidateObjectIdPipe) id: string) {
    const findOne = this.restaurantsService.findOne(id);
    if (!findOne) {
      throw new HttpException('No restaurant found with this id', 404);
    }
    return findOne;
  }
}
