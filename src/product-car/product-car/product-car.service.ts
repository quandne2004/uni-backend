import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCar } from './product-car.entity';

@Injectable()
export class ProductCarService {
  constructor(
    @InjectRepository(ProductCar)
    private productCarRepository: Repository<ProductCar>,
  ) {}

  async findAll(): Promise<ProductCar[]> {
    return this.productCarRepository.find();
  }

  async findById(id: number): Promise<ProductCar | undefined> {
    return this.productCarRepository.findOne({ where: { id } });
  }

  async create(product: ProductCar): Promise<ProductCar> {
    return this.productCarRepository.save(product);
  }

  async update(
    id: number,
    newData: Partial<ProductCar>,
  ): Promise<ProductCar | undefined> {
    await this.productCarRepository.update({ id }, newData);
    return this.productCarRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.productCarRepository.delete(id);
  }
}
