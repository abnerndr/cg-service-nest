/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  BaseEntity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Publishers } from './publisher.entity';

@Entity('congregation')
export class Congregation extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  president_name: string;

  @OneToMany(
    'Publishers',
    (publishers: Publishers) => publishers.congregation,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  publishers: Array<Publishers>;

  @Column({ default: '' })
  code: string;

  @Column({ type: 'simple-json', default: {} })
  address: any;

  @Column({ default: '' })
  photo_url: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_at: Date;
}
