import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductCarModule } from './product-car/product-car.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductCar } from './product-car/product-car/product-car.entity';
import { UserModule } from './user/user.module';
import { Users } from './user/users.entity';
import { AuthModule } from './user/auth.module';

@Module({
  imports: [
    ProductCarModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456789',
      database: 'Uni_Backend',
      entities: [ProductCar, Users],
      synchronize: false,
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
