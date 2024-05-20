import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto, UpdateOrderDto, UpdateOrderStateDto } from '../dto';
import { Order } from './order.schema';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findByRestaurant(@Param('id') id: string) {
    return this.ordersService.findByRestaurant(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto);
  }

  @Patch(':id/state')
  updateState(
    @Param('id') id: string,
    @Body() updateOrderStateDto: UpdateOrderStateDto,
  ): Promise<Order> {
    return this.ordersService.updateState(id, updateOrderStateDto.state);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Order> {
    return this.ordersService.delete(id);
  }
}
