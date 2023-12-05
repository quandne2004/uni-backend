import { Test, TestingModule } from '@nestjs/testing';
import { ProductCarController } from './product-car.controller';

describe('ProductCarController', () => {
  let controller: ProductCarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductCarController],
    }).compile();

    controller = module.get<ProductCarController>(ProductCarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
