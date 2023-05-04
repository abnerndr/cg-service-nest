/* eslint-disable prettier/prettier */
import {
  Entity,
  BaseEntity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Congregation } from './cg.entity';

@Entity('publishers')
export class Publishers extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(
    () => Congregation,
    (congregation: Congregation) => congregation.publishers,
  )
  @JoinColumn({ name: 'congregation_id' })
  congregation: Congregation;
}
