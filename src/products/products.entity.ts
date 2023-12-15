import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
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
}
