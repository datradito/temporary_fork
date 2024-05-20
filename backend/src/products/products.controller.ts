import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  HttpException,
  Patch,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from '../dto';
import { ValidateObjectIdPipe } from '../common/pipes/validate-objectid.pipe';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ValidateObjectIdPipe) id: string) {
    const findOne = this.productsService.findOne(id);
    if (!findOne) {
      throw new HttpException('No product found with this id', 404);
    }
    return findOne;
  }

  @Get('restaurant/:restaurantId')
  async findByRestaurantId(
    @Param('restaurantId', ValidateObjectIdPipe) restaurantId: string,
  ) {
    const products =
      await this.productsService.findByRestaurantId(restaurantId);
    if (!products || products.length === 0) {
      throw new HttpException('No products found for this restaurant id', 404);
    }
    return products;
  }

  @Delete(':id')
  async delete(@Param('id', ValidateObjectIdPipe) id: string) {
    const deletedProduct = await this.productsService.delete(id);
    if (!deletedProduct) {
      throw new HttpException('No product found with this id', 404);
    }
    return deletedProduct;
  }

  @Patch(':id')
  async update(
    @Param('id', ValidateObjectIdPipe) id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const updatedProduct = await this.productsService.update(
      id,
      updateProductDto,
    );
    if (!updatedProduct) {
      throw new HttpException('No product found with this id', 404);
    }
    return updatedProduct;
  }
}
