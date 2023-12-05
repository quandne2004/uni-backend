import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { ProductCar } from './product-car.entity';
import { ProductCarService } from './product-car.service';

@Controller('/api/products')
export class ProductCarController {
  constructor(private readonly productCarService: ProductCarService) {}

  @Get()
  async findAll(): Promise<ProductCar[]> {
    return this.productCarService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<ProductCar> {
    const product = await this.productCarService.findById(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  @Post()
  async create(@Body() product: ProductCar): Promise<ProductCar> {
    return this.productCarService.create(product);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() newData: Partial<ProductCar>,
  ): Promise<ProductCar> {
    const updatedProduct = await this.productCarService.update(id, newData);
    if (!updatedProduct) {
      throw new NotFoundException('Product not found');
    }
    return updatedProduct;
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    try {
      await this.productCarService.delete(id);
    } catch (error) {
      throw new NotFoundException('Product not found');
    }
  }
}
