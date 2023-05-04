/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CgService } from './services/cg.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Congregation } from './models/cg.entity';
import { CgController } from './controllers/cg.controller';
import { PublishersController } from './controllers/publisher.controller';
import { Publishers } from './models/publisher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Congregation, Publishers])],
  providers: [CgService],
  controllers: [CgController, PublishersController],
})
export class CgModule {}
