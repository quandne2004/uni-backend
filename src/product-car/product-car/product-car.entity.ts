import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class ProductCar {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  img: string;
  @Column()
  name: string;
  @Column()
  rating: number;
  @Column()
  price: string;
  @Column()
  sales: string;
  @Column()
  description: string;
}
