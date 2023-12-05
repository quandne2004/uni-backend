import { Module } from '@nestjs/common';
import { ProductCarService } from './product-car/product-car.service';
import { ProductCarController } from './product-car/product-car.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCar } from './product-car/product-car.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductCar]), // Đảm bảo đã import repository vào module
  ],
  providers: [ProductCarService],
  controllers: [ProductCarController],
})
export class ProductCarModule {}
