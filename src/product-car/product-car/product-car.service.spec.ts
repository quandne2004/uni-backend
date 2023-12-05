import { Test, TestingModule } from '@nestjs/testing';
import { ProductCarService } from './product-car.service';

describe('ProductCarService', () => {
  let service: ProductCarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCarService],
    }).compile();

    service = module.get<ProductCarService>(ProductCarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
